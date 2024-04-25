import { IEventData } from "../../../types/types";
import { GameObject } from "./";

interface ISubscribe {
  id: number,
  eventName: string,
  caller: GameObject,
  callback: (value: IEventData) => void,
}

class Events {
  callbacks: ISubscribe[] = [] ;
  nextId = 0;

  // emit event
  emit(eventName: string, value: IEventData): void {
    this.callbacks.forEach(stored => {
      if (stored.eventName === eventName) {
        stored.callback(value)
      }
    })
  }

  // subscribe to something happening
  on(eventName: string, caller: GameObject, callback: (value: IEventData) => void) {
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
  off(id: number) {
    this.callbacks = this.callbacks.filter((stored) => stored.id !== id);
  }

  unsubscribe(caller: GameObject) {
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