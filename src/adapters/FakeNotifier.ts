import type { Notifier } from '../domain/ports/Notifier';

export class FakeNotifier implements Notifier {
  messages: string[] = [];

  flash(message: string): void {
    this.messages.push(message);
  }
}
