import { describe, it, expect } from 'vitest';
import { SYMBOLS_CHARS } from '../../../src/domain/data/SymbolsChars';

describe('SYMBOLS_CHARS', () => {
  it('has at least 30 entries', () => { expect(SYMBOLS_CHARS.length).toBeGreaterThanOrEqual(30); });
  it('has no duplicate characters', () => { const c = SYMBOLS_CHARS.map((e) => e.char); expect(new Set(c).size).toBe(c.length); });
  it('every entry has a non-empty char and name', () => { for (const e of SYMBOLS_CHARS) { expect(e.char.length).toBeGreaterThan(0); expect(e.name.length).toBeGreaterThan(0); } });
});
