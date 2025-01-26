import type { CharEntry } from './CharEntry';

export function searchCharacters(
  query: string,
  entries: readonly CharEntry[],
): readonly CharEntry[] {
  const q = query.trim().toLowerCase();
  if (q === '') return entries;
  return entries.filter(
    (e) => e.name.toLowerCase().includes(q) || e.char === q,
  );
}
