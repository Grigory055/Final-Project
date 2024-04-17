import { createSlice } from '@reduxjs/toolkit';
import { fetchTopics, fetchUserLogin, fetchUserLogout, fetchUserRegister, fetchUserScore } from './thunkActions';
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
            console.log('state.score!!!!!', state.score) // здесь ловит очки реальные
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserLogin.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload) {
               state.isLogin = true;
               state.login = payload.login;
               state.score = payload.score;
               state.character = payload.character;
            }
        }),
        builder.addCase(fetchUserRegister.fulfilled, (state: UserSliceState, { payload }) => {
            // console.log('payload', payload);
            
            if (payload.clearedUser) {
                console.log('payload')
                state.isLogin = true;
                state.login = payload.login;
            } if (payload.err) {
                console.log('222')
            }
        }),
        builder.addCase(fetchUserLogout.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload === 200) {
                state.isLogin = false;
                state.login = 'Гость';
                state.score = 0;
                state.character = '';
            }
        })
        builder.addCase(fetchTopics.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload) state.topics = payload;
        })
        builder.addCase(fetchUserScore.fulfilled, (state, { payload }) => {
            if (payload) state.score = payload
            console.log('123456', state.score) // здесь тоже очки реальные
        })
    }
})

export default userSlice.reducer
export const { setCharacter, setScores } = userSlice.actions;