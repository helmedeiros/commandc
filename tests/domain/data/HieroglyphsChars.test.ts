import { describe, it, expect } from 'vitest';
import { HIEROGLYPHS_CHARS } from '../../../src/domain/data/HieroglyphsChars';

describe('HIEROGLYPHS_CHARS', () => {
  it('has at least 10 entries', () => { expect(HIEROGLYPHS_CHARS.length).toBeGreaterThanOrEqual(10); });
  it('has no duplicate characters', () => { const c = HIEROGLYPHS_CHARS.map((e) => e.char); expect(new Set(c).size).toBe(c.length); });
  it('every entry has a non-empty char and name', () => { for (const e of HIEROGLYPHS_CHARS) { expect(e.char.length).toBeGreaterThan(0); expect(e.name.length).toBeGreaterThan(0); } });
});
