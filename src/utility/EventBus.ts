export class EventBus {
  private readonly listeners: {};

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: any) {
    // @ts-ignore
    if (!this.listeners[event]) {
      // @ts-ignore
      this.listeners[event] = [];
    }

    // @ts-ignore
    this.listeners[event].push(callback);
  }

  off(event: string | number, callback: any) {
    // @ts-ignore
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    // @ts-ignore
    this.listeners[event] = this.listeners[event].filter(
        (listener: any) => listener !== callback
    );
  }

  emit(event: string, ...args: undefined[]) {
    // @ts-ignore
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    // @ts-ignore
    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}
