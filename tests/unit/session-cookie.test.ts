import assert from 'node:assert/strict';
import { test, describe } from 'node:test';
import { NextResponse } from 'next/server';
import { decode } from 'next-auth/jwt';

import {
  getAuthSessionCookieConfig,
  encodeAppSessionToken,
  applySessionTokenCookies,
  buildAppSessionTokenPayload,
} from '../../src/lib/auth/session-cookie';

const TEST_SECRET = 'test-secret-at-least-32-chars-long-security-token';

describe('session-cookie configuration and encoding', () => {
  test('développement (secure: false) génère le nom et sel authjs.session-token', () => {
    const config = getAuthSessionCookieConfig({ secure: false });

    assert.equal(config.name, 'authjs.session-token');
    assert.equal(config.salt, 'authjs.session-token');
    assert.equal(config.options.secure, false);
    assert.equal(config.options.httpOnly, true);
    assert.equal(config.options.sameSite, 'lax');
    assert.equal(config.options.path, '/');
  });

  test('production (secure: true) génère le nom et sel __Secure-authjs.session-token', () => {
    const config = getAuthSessionCookieConfig({ secure: true });

    assert.equal(config.name, '__Secure-authjs.session-token');
    assert.equal(config.salt, '__Secure-authjs.session-token');
    assert.equal(config.options.secure, true);
    assert.equal(config.options.httpOnly, true);
    assert.equal(config.options.sameSite, 'lax');
    assert.equal(config.options.path, '/');
  });

  test('déduit la sécurité HTTPS et HTTP depuis requestUrl', () => {
    const httpConfig = getAuthSessionCookieConfig('http://localhost:3000/api/admin');
    assert.equal(httpConfig.name, 'authjs.session-token');
    assert.equal(httpConfig.options.secure, false);

    const httpsConfig = getAuthSessionCookieConfig('https://my-exams.fr/api/admin');
    assert.equal(httpsConfig.name, '__Secure-authjs.session-token');
    assert.equal(httpsConfig.options.secure, true);
  });

  test('applique AUTH_COOKIE_DOMAIN uniquement si la requête appartient au domaine parent', () => {
    const previousDomain = process.env.AUTH_COOKIE_DOMAIN;
    process.env.AUTH_COOKIE_DOMAIN = '.lvh.me';

    try {
      const parentDomainConfig = getAuthSessionCookieConfig('http://sante.lvh.me:3000');
      assert.equal(parentDomainConfig.options.domain, '.lvh.me');

      const otherDomainConfig = getAuthSessionCookieConfig('http://example.com:3000');
      assert.equal(otherDomainConfig.options.domain, undefined);
    } finally {
      process.env.AUTH_COOKIE_DOMAIN = previousDomain;
    }
  });

  test('encodage et déchiffrement roundtrip en mode sécurisé (__Secure-authjs.session-token)', async () => {
    const previousSecret = process.env.AUTH_SECRET;
    process.env.AUTH_SECRET = TEST_SECRET;

    try {
      const payload = buildAppSessionTokenPayload({
        actor: { id: 'admin-1', role: 'ADMIN', name: 'Admin', email: 'admin@test.com' },
        viewer: { id: 'demo-user-1', role: 'USER', name: 'Demo Student', email: 'demo@test.com' },
      });

      const jwt = await encodeAppSessionToken(payload, { secure: true });

      const decoded = await decode({
        token: jwt,
        secret: TEST_SECRET,
        salt: '__Secure-authjs.session-token',
      });

      assert.ok(decoded);
      assert.equal(decoded.sub, 'demo-user-1');
      assert.equal(decoded.actorId, 'admin-1');
      assert.equal(decoded.impersonatedUserId, 'demo-user-1');
    } finally {
      process.env.AUTH_SECRET = previousSecret;
    }
  });

  test('applySessionTokenCookies pose uniquement le cookie canonique unique', () => {
    const response = NextResponse.json({ ok: true });
    const fakeJwt = 'header.payload.signature';

    applySessionTokenCookies(response, fakeJwt, { secure: true });

    assert.ok(response.cookies.get('__Secure-authjs.session-token'));
    assert.equal(response.cookies.get('__Secure-authjs.session-token')?.value, fakeJwt);
    assert.equal(response.cookies.get('authjs.session-token'), undefined);
    assert.equal(response.cookies.get('next-auth.session-token'), undefined);
    assert.equal(response.cookies.get('__Secure-next-auth.session-token'), undefined);
  });
});
