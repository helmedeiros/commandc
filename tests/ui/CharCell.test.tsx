import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharCell } from '../../src/ui/components/CharCell';

describe('CharCell', () => {
  it('renders the character', () => {
    render(<CharCell char={'\u00A9'} name="Copyright" onClick={() => {}} />);
    expect(screen.getByText('\u00A9')).toBeInTheDocument();
  });

  it('has the name as title for tooltip', () => {
    render(<CharCell char={'\u00A9'} name="Copyright" onClick={() => {}} />);
    expect(screen.getByTitle('Copyright')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<CharCell char={'\u00A9'} name="Copyright" onClick={onClick} />);
    fireEvent.click(screen.getByText('\u00A9'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
