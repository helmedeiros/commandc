import { describe, it, expect } from 'vitest';
import { CURRENCY_CHARS } from '../../../src/domain/data/CurrencyChars';

describe('CURRENCY_CHARS', () => {
  it('has at least 10 entries', () => { expect(CURRENCY_CHARS.length).toBeGreaterThanOrEqual(10); });
  it('has no duplicate characters', () => { const c = CURRENCY_CHARS.map((e) => e.char); expect(new Set(c).size).toBe(c.length); });
  it('every entry has a non-empty char and name', () => { for (const e of CURRENCY_CHARS) { expect(e.char.length).toBeGreaterThan(0); expect(e.name.length).toBeGreaterThan(0); } });
});
