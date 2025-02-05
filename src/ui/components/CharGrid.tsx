import type { CharEntry } from '../../domain/CharEntry';
import { CharCell } from './CharCell';

export interface CharGridProps {
  entries: readonly CharEntry[];
  onCopy: (char: string) => void;
}

export function CharGrid({ entries, onCopy }: CharGridProps) {
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
