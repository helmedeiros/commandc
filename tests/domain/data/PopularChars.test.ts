import { describe, it, expect } from 'vitest';
import { POPULAR_CHARS } from '../../../src/domain/data/PopularChars';

describe('POPULAR_CHARS', () => {
  it('has at least 20 entries', () => {
    expect(POPULAR_CHARS.length).toBeGreaterThanOrEqual(20);
  });

  it('has no duplicate characters', () => {
    const chars = POPULAR_CHARS.map((e) => e.char);
    expect(new Set(chars).size).toBe(chars.length);
  });

  it('every entry has a non-empty char and name', () => {
    for (const entry of POPULAR_CHARS) {
      expect(entry.char.length).toBeGreaterThan(0);
      expect(entry.name.length).toBeGreaterThan(0);
    }
  });
});
