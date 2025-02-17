export interface SearchStatusProps {
  query: string;
  count: number;
}

export function SearchStatus({ query, count }: SearchStatusProps) {
  if (query.trim() === '') return null;
  return (
    <div className="search-status">
      {count} result{count !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
    </div>
  );
}
