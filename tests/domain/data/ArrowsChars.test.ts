import { describe, it, expect } from 'vitest';
import { ARROWS_CHARS } from '../../../src/domain/data/ArrowsChars';

describe('ARROWS_CHARS', () => {
  it('has at least 20 entries', () => { expect(ARROWS_CHARS.length).toBeGreaterThanOrEqual(20); });
  it('has no duplicate characters', () => { const c = ARROWS_CHARS.map((e) => e.char); expect(new Set(c).size).toBe(c.length); });
  it('every entry has a non-empty char and name', () => { for (const e of ARROWS_CHARS) { expect(e.char.length).toBeGreaterThan(0); expect(e.name.length).toBeGreaterThan(0); } });
});
