import { describe, it, expect } from 'vitest';
import { NUMBERS_CHARS } from '../../../src/domain/data/NumbersChars';

describe('NUMBERS_CHARS', () => {
  it('has at least 30 entries', () => { expect(NUMBERS_CHARS.length).toBeGreaterThanOrEqual(30); });
  it('has no duplicate characters', () => { const c = NUMBERS_CHARS.map((e) => e.char); expect(new Set(c).size).toBe(c.length); });
  it('every entry has a non-empty char and name', () => { for (const e of NUMBERS_CHARS) { expect(e.char.length).toBeGreaterThan(0); expect(e.name.length).toBeGreaterThan(0); } });
});
