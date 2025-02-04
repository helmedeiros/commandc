export interface HeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">{'\u2318'}+C</div>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </header>
  );
}
