import { eventsOff, eventsOn, eventsUnsubscribe } from "../../../redux/RPGSlice";
import { store } from "../../../redux/store";

class Events {
  callbacks = [];
  nextId = 0;

  // emit event
  emit(eventName, value) {

    const state = store.getState();
    const callbacks = state.RPGSlice.eventCallbacks;

    callbacks.forEach(stored => {
      if (stored.eventName === eventName) {
        stored.callback(value)
      }
    })
  }

  // subscribe to something happening
  on(eventName, caller, callback) {
    this.nextId += 1;
    const event = {
      id: this.nextId,
      eventName,
      caller,
      callback,
    };
    store.dispatch(eventsOn(event));
    return this.nextId;
  }

  // remove the subscription
  off(id) {
    store.dispatch(eventsOff(id));
    // this.callbacks = this.callbacks.filter((stored) => stored.id !== id);
  }

  unsubscribe(caller) {
    store.dispatch(eventsUnsubscribe(caller));
    // this.callbacks = this.callbacks.filter(
    //     (stored) => stored.caller !== caller,
    // );
  }


}

export const events = new Events();