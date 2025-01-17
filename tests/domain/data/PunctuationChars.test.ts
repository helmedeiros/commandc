import { describe, it, expect } from 'vitest';
import { PUNCTUATION_CHARS } from '../../../src/domain/data/PunctuationChars';

describe('PUNCTUATION_CHARS', () => {
  it('has at least 15 entries', () => {
    expect(PUNCTUATION_CHARS.length).toBeGreaterThanOrEqual(15);
  });
  it('has no duplicate characters', () => {
    const chars = PUNCTUATION_CHARS.map((e) => e.char);
    expect(new Set(chars).size).toBe(chars.length);
  });
  it('every entry has a non-empty char and name', () => {
    for (const entry of PUNCTUATION_CHARS) {
      expect(entry.char.length).toBeGreaterThan(0);
      expect(entry.name.length).toBeGreaterThan(0);
    }
  });
});
