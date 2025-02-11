import { useState, useCallback } from 'react';

export interface CharCellProps {
  char: string;
  name: string;
  onClick: () => void;
}

export function CharCell({ char, name, onClick }: CharCellProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(() => {
    onClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 600);
  }, [onClick]);

  return (
    <button
      type="button"
      className={`char-cell${copied ? ' copied' : ''}`}
      title={name}
      aria-label={`Copy ${name}`}
      onClick={handleClick}
    >
      {char}
    </button>
  );
}
