import assert from 'node:assert/strict';
import { test, describe } from 'node:test';
import { NextResponse } from 'next/server';

import {
  getAuthSessionCookieConfig,
  clearSessionCookie,
  getAdminSessionExpiresAt,
} from '../../src/lib/auth/session-cookie';

describe('session-cookie configuration et gestion des cookies', () => {
  test('développement (secure: false) génère le nom authjs.session-token', () => {
    const config = getAuthSessionCookieConfig({ secure: false });

    assert.equal(config.name, 'authjs.session-token');
    assert.equal(config.options.secure, false);
    assert.equal(config.options.httpOnly, true);
    assert.equal(config.options.sameSite, 'lax');
    assert.equal(config.options.path, '/');
  });

  test('production (secure: true) génère le nom __Secure-authjs.session-token', () => {
    const config = getAuthSessionCookieConfig({ secure: true });

    assert.equal(config.name, '__Secure-authjs.session-token');
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

  test('clearSessionCookie efface les deux variantes de cookie de session', () => {
    const response = NextResponse.json({ ok: true });
    clearSessionCookie(response, { secure: true });

    const secureCookie = response.cookies.get('__Secure-authjs.session-token');
    const normalCookie = response.cookies.get('authjs.session-token');

    assert.ok(secureCookie);
    assert.equal(secureCookie.value, '');
    assert.equal(secureCookie.maxAge, 0);

    assert.ok(normalCookie);
    assert.equal(normalCookie.value, '');
    assert.equal(normalCookie.maxAge, 0);
  });

  test('getAdminSessionExpiresAt retourne un timestamp futur à 8 heures', () => {
    const now = Date.now();
    const expiresAt = getAdminSessionExpiresAt();
    const diffHours = (expiresAt - now) / (1000 * 60 * 60);

    assert.ok(diffHours >= 7.99 && diffHours <= 8.01);
  });
});
