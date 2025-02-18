import { useState, useCallback, useEffect } from 'react';
import type { Category } from '../domain/Category';
import type { Clipboard } from '../domain/ports/Clipboard';
import { getByCategory, getAllCharacters } from '../domain/CharacterRegistry';
import { searchCharacters } from '../domain/SearchCharacters';
import { Header } from './components/Header';
import { CategoryTabs } from './components/CategoryTabs';
import { CharGrid } from './components/CharGrid';
import { Toast } from './components/Toast';
import { SearchStatus } from './components/SearchStatus';
import { Footer } from './components/Footer';

export interface AppProps {
  clipboard: Clipboard;
}

export function App({ clipboard }: AppProps) {
  const [category, setCategory] = useState<Category>('Popular');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const entries = query.trim() !== ''
    ? searchCharacters(query, getAllCharacters())
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

  // Global keyboard shortcut: "/" focuses search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        document.querySelector<HTMLInputElement>('.search-input')?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <Header query={query} onQueryChange={setQuery} />
      <CategoryTabs active={category} onSelect={handleCategoryChange} />
      <SearchStatus query={query} count={entries.length} />
      <CharGrid entries={entries} onCopy={handleCopy} />
      <Toast message={toast} />
      <Footer />
    </>
  );
}
