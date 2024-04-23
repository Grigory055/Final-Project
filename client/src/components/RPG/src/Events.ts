interface ISubscribe {
  id: number,
  eventName: any,
  caller: any,
  callback: any,
}

class Events {
  callbacks = [] ;
  nextId = 0;

  // emit event
  emit(eventName: any, value: any) {
    this.callbacks.forEach(stored => {
      if (stored.eventName === eventName) {
        stored.callback(value)
      }
    })
  }

  // subscribe to something happening
  on(eventName: any, caller: any, callback: any) {
    this.nextId += 1;
    const subscribe: ISubscribe = {
      id: this.nextId,
      eventName,
      caller,
      callback,
    }
    this.callbacks.push(subscribe);
    return this.nextId;
  }

  // remove the subscription
  off(id: any) {
    this.callbacks = this.callbacks.filter((stored) => stored.id !== id);
  }

  unsubscribe(caller: any) {
    this.callbacks = this.callbacks.filter(
        (stored) => stored.caller !== caller,
    );
  }

  clear() {
    this.callbacks = [];
    this.nextId = 0;
  }

}

export const events = new Events();