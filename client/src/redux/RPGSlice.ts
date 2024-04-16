import { createSlice } from '@reduxjs/toolkit';
import { IEvent } from '../types/types';

export type RPGSliceState = {
  heroIsWalking: boolean,
  walls: Array<string>,
  dialogIsOpen: boolean,
  dialogID: number,
  eventCallbacks: Array<IEvent>,
}

const initialState: RPGSliceState = {
  heroIsWalking: true,
  walls: [],
  dialogIsOpen: false,
  dialogID: 0,
  eventCallbacks: [],
}

const RPGSlice = createSlice({
    name: 'RPGSlice',
    initialState,
    reducers: {
      switchHeroWalk(state, { payload }) {
        state.heroIsWalking = payload;
      },
      setWalls(state, {payload}) {
        state.walls = [...payload];
      },
      openExit(state, { payload }) {       
        state.walls = state.walls.filter((el) => el !== payload);
      },
      switchDialog(state, { payload }) {
        state.dialogIsOpen = payload;
      },
      setDialog(state, { payload }) {
        state.dialogID = payload;
      },
      eventsOn(state, { payload }){
        state.eventCallbacks.push(payload);
      },
      eventsOff(state, { payload }) {
        state.eventCallbacks = state.eventCallbacks.filter((stored) => stored.id !== payload);
      },
      eventsUnsubscribe(state, { payload }) {
        state.eventCallbacks = state.eventCallbacks.filter((stored) => stored.caller !== payload);
      },
      eventsClear(state) {
        state.eventCallbacks = [];
      }
    },
})

export default RPGSlice.reducer
export const { openExit, setWalls, switchHeroWalk, switchDialog, setDialog, eventsOn, eventsOff, eventsUnsubscribe, eventsClear } = RPGSlice.actions;