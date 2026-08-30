import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import { generateWatermarkCode } from '../../src/lib/watermark.server';

// Ensure a valid test watermark secret is present for nominal tests
const TEST_WATERMARK_SECRET = 'unit-test-watermark-secret-key-32bytes';

test('generateWatermarkCode creates opaque, deterministic HMAC codes when secret is present', () => {
  const originalSecret = process.env.WATERMARK_SECRET;
  try {
    process.env.WATERMARK_SECRET = TEST_WATERMARK_SECRET;

    const code1 = generateWatermarkCode({
      userId: 'user_12345',
      sessionId: 'session_67890',
    });

    const code2 = generateWatermarkCode({
      userId: 'user_12345',
      sessionId: 'session_67890',
    });

    assert.equal(code1, code2);
    assert.match(code1, /^SESSION [0-9A-F]{8}$/);
  } finally {
    process.env.WATERMARK_SECRET = originalSecret;
  }
});

test('generateWatermarkCode produces different codes for different users or sessions', () => {
  const originalSecret = process.env.WATERMARK_SECRET;
  try {
    process.env.WATERMARK_SECRET = TEST_WATERMARK_SECRET;

    const codeUserA = generateWatermarkCode({
      userId: 'user_A',
      sessionId: 'session_1',
    });

    const codeUserB = generateWatermarkCode({
      userId: 'user_B',
      sessionId: 'session_1',
    });

    const codeSession2 = generateWatermarkCode({
      userId: 'user_A',
      sessionId: 'session_2',
    });

    assert.notEqual(codeUserA, codeUserB);
    assert.notEqual(codeUserA, codeSession2);
  } finally {
    process.env.WATERMARK_SECRET = originalSecret;
  }
});

test('generateWatermarkCode safely handles anonymous or missing userIds', () => {
  const originalSecret = process.env.WATERMARK_SECRET;
  try {
    process.env.WATERMARK_SECRET = TEST_WATERMARK_SECRET;

    const codeAnon1 = generateWatermarkCode({
      userId: null,
      sessionId: 'session_guest_1',
    });

    const codeAnon2 = generateWatermarkCode({
      userId: undefined,
      sessionId: 'session_guest_1',
    });

    assert.equal(codeAnon1, codeAnon2);
    assert.match(codeAnon1, /^SESSION [0-9A-F]{8}$/);
  } finally {
    process.env.WATERMARK_SECRET = originalSecret;
  }
});

test('generateWatermarkCode strictly ignores AUTH_SECRET and has zero fallback to it', () => {
  const originalWatermarkSecret = process.env.WATERMARK_SECRET;
  const originalAuthSecret = process.env.AUTH_SECRET;

  try {
    process.env.WATERMARK_SECRET = 'explicit-watermark-key-alpha';
    process.env.AUTH_SECRET = 'auth-secret-one';

    const codeWithAuth1 = generateWatermarkCode({
      userId: 'user_1',
      sessionId: 'session_1',
    });

    // Changing AUTH_SECRET must have ZERO impact on the watermark code
    process.env.AUTH_SECRET = 'auth-secret-two-totally-different';
    const codeWithAuth2 = generateWatermarkCode({
      userId: 'user_1',
      sessionId: 'session_1',
    });

    assert.equal(codeWithAuth1, codeWithAuth2);

    // Changing WATERMARK_SECRET must change the code
    process.env.WATERMARK_SECRET = 'explicit-watermark-key-beta';
    const codeWithDifferentWatermark = generateWatermarkCode({
      userId: 'user_1',
      sessionId: 'session_1',
    });

    assert.notEqual(codeWithAuth1, codeWithDifferentWatermark);
  } finally {
    process.env.WATERMARK_SECRET = originalWatermarkSecret;
    process.env.AUTH_SECRET = originalAuthSecret;
  }
});

test('generateWatermarkCode fails fast with explicit error when WATERMARK_SECRET is missing or empty', () => {
  const originalWatermarkSecret = process.env.WATERMARK_SECRET;
  const originalAuthSecret = process.env.AUTH_SECRET;

  try {
    // Even if AUTH_SECRET is set, missing WATERMARK_SECRET must throw without fallback
    process.env.AUTH_SECRET = 'some-auth-secret-that-must-never-be-used';

    delete process.env.WATERMARK_SECRET;
    assert.throws(
      () => {
        generateWatermarkCode({
          userId: 'user_1',
          sessionId: 'session_1',
        });
      },
      { message: 'WATERMARK_SECRET is required' }
    );

    // Empty string
    process.env.WATERMARK_SECRET = '';
    assert.throws(
      () => {
        generateWatermarkCode({
          userId: 'user_1',
          sessionId: 'session_1',
        });
      },
      { message: 'WATERMARK_SECRET is required' }
    );

    // Whitespace string
    process.env.WATERMARK_SECRET = '   ';
    assert.throws(
      () => {
        generateWatermarkCode({
          userId: 'user_1',
          sessionId: 'session_1',
        });
      },
      { message: 'WATERMARK_SECRET is required' }
    );
  } finally {
    process.env.WATERMARK_SECRET = originalWatermarkSecret;
    process.env.AUTH_SECRET = originalAuthSecret;
  }
});

test('Source code audit: no hardcoded fallback watermark secret exists in source files', () => {
  const watermarkServerPath = path.resolve(process.cwd(), 'src/lib/watermark.server.ts');
  const sourceContent = fs.readFileSync(watermarkServerPath, 'utf-8');

  // Verify that DEFAULT_FALLBACK_SECRET and old fallback key are completely absent
  assert.equal(sourceContent.includes('DEFAULT_FALLBACK_SECRET'), false);
  assert.equal(sourceContent.includes('my-exams-internal-watermark-secret-key'), false);
  assert.equal(sourceContent.includes('AUTH_SECRET'), false);
});
