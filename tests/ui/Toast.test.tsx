import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toast } from '../../src/ui/components/Toast';

describe('Toast', () => {
  it('renders the message when visible', () => {
    render(<Toast message="Copied!" />);
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });

  it('renders nothing when message is null', () => {
    const { container } = render(<Toast message={null} />);
    expect(container.querySelector('.toast')).toBeNull();
  });

  it('renders nothing when message is empty', () => {
    const { container } = render(<Toast message="" />);
    expect(container.querySelector('.toast')).toBeNull();
  });
});
