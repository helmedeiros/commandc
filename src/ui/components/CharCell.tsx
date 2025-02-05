export interface CharCellProps {
  char: string;
  name: string;
  onClick: () => void;
}

export function CharCell({ char, name, onClick }: CharCellProps) {
  return (
    <button
      type="button"
      className="char-cell"
      title={name}
      onClick={onClick}
    >
      {char}
    </button>
  );
}
