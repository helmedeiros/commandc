import type { CharEntry } from '../CharEntry';

export const PUNCTUATION_CHARS: readonly CharEntry[] = [
  { char: '\u2014', name: 'Em Dash' }, { char: '\u2013', name: 'En Dash' },
  { char: '\u2026', name: 'Ellipsis' },
  { char: '\u00AB', name: 'Left Guillemet' }, { char: '\u00BB', name: 'Right Guillemet' },
  { char: '\u2039', name: 'Left Single Guillemet' }, { char: '\u203A', name: 'Right Single Guillemet' },
  { char: '\u201C', name: 'Left Double Quote' }, { char: '\u201D', name: 'Right Double Quote' },
  { char: '\u2018', name: 'Left Single Quote' }, { char: '\u2019', name: 'Right Single Quote' },
  { char: '\u201E', name: 'Double Low Quote' }, { char: '\u201A', name: 'Single Low Quote' },
  { char: '\u00A7', name: 'Section' }, { char: '\u00B6', name: 'Pilcrow' },
  { char: '\u2020', name: 'Dagger' }, { char: '\u2021', name: 'Double Dagger' },
  { char: '\u2022', name: 'Bullet' }, { char: '\u00B7', name: 'Middle Dot' },
  { char: '\u00A1', name: 'Inverted Exclamation' }, { char: '\u00BF', name: 'Inverted Question' },
  { char: '\u2016', name: 'Double Vertical Line' },
  { char: '\u204B', name: 'Reversed Pilcrow' },
  { char: '\u2032', name: 'Prime' }, { char: '\u2033', name: 'Double Prime' },
  { char: '\u2034', name: 'Triple Prime' }, { char: '\u2036', name: 'Reversed Double Prime' },
];
