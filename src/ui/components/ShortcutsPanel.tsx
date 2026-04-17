import { SHORTCUTS } from '../../domain/Shortcut';

export interface ShortcutsPanelProps {
  open: boolean;
  onToggle: () => void;
}

export function ShortcutsPanel({ open, onToggle }: ShortcutsPanelProps) {
  return (
    <div className="shortcuts-panel">
      <button
        type="button"
        className="shortcuts-toggle"
        aria-label={open ? 'Hide keyboard shortcuts' : 'Show keyboard shortcuts'}
        onClick={onToggle}
      >
        {open ? '\u2715' : '\u2328'}
      </button>
      {open && (
        <div className="shortcuts-content">
          <h3>Keyboard Shortcuts</h3>
          <dl className="shortcuts-list">
            {SHORTCUTS.map((s) => (
              <div key={s.description} className="shortcut-row">
                <dt className="shortcut-keys">
                  {s.keys.map((k) => (
                    <kbd key={k}>{k}</kbd>
                  ))}
                </dt>
                <dd className="shortcut-desc">{s.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
