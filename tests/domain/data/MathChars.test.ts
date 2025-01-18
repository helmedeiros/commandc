import { describe, it, expect } from 'vitest';
import { MATH_CHARS } from '../../../src/domain/data/MathChars';

describe('MATH_CHARS', () => {
  it('has at least 20 entries', () => { expect(MATH_CHARS.length).toBeGreaterThanOrEqual(20); });
  it('has no duplicate characters', () => { const c = MATH_CHARS.map((e) => e.char); expect(new Set(c).size).toBe(c.length); });
  it('every entry has a non-empty char and name', () => { for (const e of MATH_CHARS) { expect(e.char.length).toBeGreaterThan(0); expect(e.name.length).toBeGreaterThan(0); } });
});
