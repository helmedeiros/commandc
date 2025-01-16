import { describe, it, expect } from 'vitest';
import { LETTERS_CHARS } from '../../../src/domain/data/LettersChars';

describe('LETTERS_CHARS', () => {
  it('has at least 30 entries', () => {
    expect(LETTERS_CHARS.length).toBeGreaterThanOrEqual(30);
  });

  it('has no duplicate characters', () => {
    const chars = LETTERS_CHARS.map((e) => e.char);
    expect(new Set(chars).size).toBe(chars.length);
  });

  it('every entry has a non-empty char and name', () => {
    for (const entry of LETTERS_CHARS) {
      expect(entry.char.length).toBeGreaterThan(0);
      expect(entry.name.length).toBeGreaterThan(0);
    }
  });
});
