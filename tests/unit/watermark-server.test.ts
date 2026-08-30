import assert from 'node:assert/strict';
import test from 'node:test';

import { generateWatermarkCode } from '../../src/lib/watermark.server';

test('generateWatermarkCode creates opaque, deterministic HMAC codes', () => {
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
});

test('generateWatermarkCode produces different codes for different users or sessions', () => {
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
});

test('generateWatermarkCode safely handles anonymous or missing userIds', () => {
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
});

test('generateWatermarkCode strictly uses WATERMARK_SECRET and ignores AUTH_SECRET', () => {
  const originalWatermarkSecret = process.env.WATERMARK_SECRET;
  const originalAuthSecret = process.env.AUTH_SECRET;

  try {
    delete process.env.WATERMARK_SECRET;
    process.env.AUTH_SECRET = 'super-secret-auth-key-that-should-never-be-used';

    const defaultCode = generateWatermarkCode({
      userId: 'user_1',
      sessionId: 'session_1',
    });

    // Changing AUTH_SECRET should NOT change the watermark code
    process.env.AUTH_SECRET = 'another-auth-key';
    const codeWithDifferentAuthSecret = generateWatermarkCode({
      userId: 'user_1',
      sessionId: 'session_1',
    });

    assert.equal(defaultCode, codeWithDifferentAuthSecret);

    // Setting explicit WATERMARK_SECRET must change the watermark code
    process.env.WATERMARK_SECRET = 'custom-watermark-key';
    const customCode = generateWatermarkCode({
      userId: 'user_1',
      sessionId: 'session_1',
    });

    assert.notEqual(defaultCode, customCode);
  } finally {
    process.env.WATERMARK_SECRET = originalWatermarkSecret;
    process.env.AUTH_SECRET = originalAuthSecret;
  }
});
