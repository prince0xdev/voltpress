type Fn = (...args: any[]) => Promise<void> | void;

class HookSystem {
  private map = new Map<string, Fn[]>();

  on(event: string, fn: Fn) {
    const list = this.map.get(event) || [];
    list.push(fn);
    this.map.set(event, list);
  }

  async emit(event: string, ...args: any[]) {
    const list = this.map.get(event) || [];
    for (const fn of list) await fn(...args);
  }
}

export const hooks = new HookSystem();
