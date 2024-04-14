import { createSlice } from '@reduxjs/toolkit';

export type RPGSliceState = {
  heroIsWalking: boolean,
  walls: Array<string>,
  dialogIsOpen: boolean,
}

const initialState: RPGSliceState = {
  heroIsWalking: true,
  walls: [],
  dialogIsOpen: false,
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
    },
})

export default RPGSlice.reducer
export const { openExit, setWalls, switchHeroWalk, switchDialog } = RPGSlice.actions;