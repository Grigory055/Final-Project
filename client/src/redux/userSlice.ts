import { createSlice } from '@reduxjs/toolkit';
import { fetchTopics, fetchUserLogin, fetchUserLogout, fetchUserRegister } from './thunkActions';
import { ICard } from '../types/types';

export type UserSliceState = {
    isLogin: boolean,
    login: string,
    topics: ICard[],
    score: number,
    character: string,
}

const initialState: UserSliceState = {
    isLogin: false,
    login: 'Гость',
    topics: [],
    score: 0,
    character: '',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCharacter(state, { payload }) {
            state.character = payload;
        },
        setScores(state, { payload } ) {
            state.score += payload;
            console.log('state.score', state.score)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserLogin.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload) {
               state.isLogin = true;
               state.login = payload.login;
            }
        }),
        builder.addCase(fetchUserRegister.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload) state.isLogin = true
        }),
        builder.addCase(fetchUserLogout.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload === 200) {
                state.isLogin = false;
                state.login = 'Гость';
                state.score = 0;
            }
        })
        builder.addCase(fetchTopics.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload) state.topics = payload;
        })
    }
})

export default userSlice.reducer
export const { setCharacter, setScores } = userSlice.actions;