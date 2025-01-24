import { describe, it, expect } from 'vitest';
import { EMOJI_CHARS } from '../../../src/domain/data/EmojiChars';

describe('EMOJI_CHARS', () => {
  it('has at least 20 entries', () => { expect(EMOJI_CHARS.length).toBeGreaterThanOrEqual(20); });
  it('has no duplicate characters', () => { const c = EMOJI_CHARS.map((e) => e.char); expect(new Set(c).size).toBe(c.length); });
  it('every entry has a non-empty char and name', () => { for (const e of EMOJI_CHARS) { expect(e.char.length).toBeGreaterThan(0); expect(e.name.length).toBeGreaterThan(0); } });
});
