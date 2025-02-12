import type { CharEntry } from '../../domain/CharEntry';
import { CharCell } from './CharCell';

export interface CharGridProps {
  entries: readonly CharEntry[];
  onCopy: (char: string) => void;
}

export function CharGrid({ entries, onCopy }: CharGridProps) {
  if (entries.length === 0) {
    return <div className="char-grid-empty">No characters found</div>;
  }

  return (
    <div className="char-grid">
      {entries.map((entry) => (
        <CharCell
          key={entry.char}
          char={entry.char}
          name={entry.name}
          onClick={() => onCopy(entry.char)}
        />
      ))}
    </div>
  );
}
