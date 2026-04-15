import { describe, it, expect } from 'vitest';
import { SHORTCUTS } from '../../src/domain/Shortcut';

describe('SHORTCUTS', () => {
  it('has at least 3 entries', () => {
    expect(SHORTCUTS.length).toBeGreaterThanOrEqual(3);
  });

  it('every shortcut has keys and a description', () => {
    for (const s of SHORTCUTS) {
      expect(s.keys.length).toBeGreaterThan(0);
      expect(s.description.length).toBeGreaterThan(0);
    }
  });

  it('has no duplicate descriptions', () => {
    const descs = SHORTCUTS.map((s) => s.description);
    expect(new Set(descs).size).toBe(descs.length);
  });
});
