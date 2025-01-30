import { describe, it, expect } from 'vitest';
import { FakeNotifier } from '../../src/adapters/FakeNotifier';

describe('FakeNotifier', () => {
  it('starts with empty messages', () => {
    const notifier = new FakeNotifier();
    expect(notifier.messages).toEqual([]);
  });

  it('records flashed messages', () => {
    const notifier = new FakeNotifier();
    notifier.flash('Copied!');
    notifier.flash('Done!');
    expect(notifier.messages).toEqual(['Copied!', 'Done!']);
  });
});
