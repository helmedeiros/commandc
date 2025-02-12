import type { KeyboardEvent } from 'react';

export interface HeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export function Header({ query, onQueryChange }: HeaderProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      onQueryChange('');
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <header className="header">
      <div className="logo">{'\u2318'}+C</div>
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        aria-label="Search characters"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
}
