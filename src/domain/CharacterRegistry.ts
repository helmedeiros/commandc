import type { CharEntry } from './CharEntry';
import type { Category } from './Category';
import { POPULAR_CHARS } from './data/PopularChars';
import { LETTERS_CHARS } from './data/LettersChars';
import { PUNCTUATION_CHARS } from './data/PunctuationChars';
import { MATH_CHARS } from './data/MathChars';
import { NUMBERS_CHARS } from './data/NumbersChars';
import { CURRENCY_CHARS } from './data/CurrencyChars';
import { SYMBOLS_CHARS } from './data/SymbolsChars';
import { HIEROGLYPHS_CHARS } from './data/HieroglyphsChars';
import { ARROWS_CHARS } from './data/ArrowsChars';
import { EMOJI_CHARS } from './data/EmojiChars';

const CATEGORY_MAP: Record<Category, readonly CharEntry[]> = {
  Popular: POPULAR_CHARS,
  Letters: LETTERS_CHARS,
  Punctuation: PUNCTUATION_CHARS,
  Math: MATH_CHARS,
  Numbers: NUMBERS_CHARS,
  Currency: CURRENCY_CHARS,
  Symbols: SYMBOLS_CHARS,
  Hieroglyphs: HIEROGLYPHS_CHARS,
  Arrows: ARROWS_CHARS,
  Emoji: EMOJI_CHARS,
};

function buildAllCharacters(): readonly CharEntry[] {
  const seen = new Set<string>();
  const result: CharEntry[] = [];
  for (const entries of Object.values(CATEGORY_MAP)) {
    for (const entry of entries) {
      if (!seen.has(entry.char)) {
        seen.add(entry.char);
        result.push(entry);
      }
    }
  }
  return result;
}

const ALL_CHARACTERS = buildAllCharacters();

export function getAllCharacters(): readonly CharEntry[] {
  return ALL_CHARACTERS;
}

export function getByCategory(category: Category): readonly CharEntry[] {
  return CATEGORY_MAP[category] ?? [];
}
