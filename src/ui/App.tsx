import { useState, useCallback } from 'react';
import type { Category } from '../domain/Category';
import type { Clipboard } from '../domain/ports/Clipboard';
import { getByCategory } from '../domain/CharacterRegistry';
import { searchCharacters } from '../domain/SearchCharacters';
import { Header } from './components/Header';
import { CategoryTabs } from './components/CategoryTabs';
import { CharGrid } from './components/CharGrid';
import { Toast } from './components/Toast';

export interface AppProps {
  clipboard: Clipboard;
}

export function App({ clipboard }: AppProps) {
  const [category, setCategory] = useState<Category>('Popular');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const entries = query.trim() !== ''
    ? searchCharacters(query, getByCategory(category))
    : getByCategory(category);

  const handleCopy = useCallback(async (char: string) => {
    try {
      await clipboard.copy(char);
      setToast(`Copied ${char}`);
      setTimeout(() => setToast(null), 1500);
    } catch {
      setToast('Failed to copy');
      setTimeout(() => setToast(null), 1500);
    }
  }, [clipboard]);

  const handleCategoryChange = useCallback((cat: Category) => {
    setCategory(cat);
    setQuery('');
  }, []);

  return (
    <>
      <Header query={query} onQueryChange={setQuery} />
      <CategoryTabs active={category} onSelect={handleCategoryChange} />
      <CharGrid entries={entries} onCopy={handleCopy} />
      <Toast message={toast} />
    </>
  );
}
