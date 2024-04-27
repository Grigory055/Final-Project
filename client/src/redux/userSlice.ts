import { createSlice } from '@reduxjs/toolkit';
import { fetchTopics, fetchUserLogin, fetchUserLogout, fetchUserRegister, fetchUserScore } from './thunkActions';
import { ICard } from '../types/types';

export type UserSliceState = {
    isLogin: boolean,
    loginErr: string,
    login: string,
    topics: ICard[],
    score: number,
    character: string,
    level: number,
}

const initialState: UserSliceState = {
    isLogin: false,
    loginErr: '',
    login: 'Гость',
    topics: [],
    score: 0,
    character: '',
    level: 0,
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserLogin.fulfilled, (state: UserSliceState, { payload }: any) => {
            if (payload) {
               state.isLogin = true;
               state.login = payload.login;
               state.score = payload.score;
               state.character = payload.character;
               state.level = payload.level;
            }
        }),
        builder.addCase(fetchUserRegister.fulfilled, (state: UserSliceState, { payload }: any) => {
            console.log('payload1', payload);
            
            if (payload) {
                state.isLogin = true;
                state.login = payload.login;
            } if (!payload) {
                state.loginErr = 'Такой пользователь существует'
            }
        }),
        builder.addCase(fetchUserLogout.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload === 200) {
                state.isLogin = false;
                state.login = 'Гость';
                state.score = 0;
                state.character = '';
                state.level = 0;
            }
        })
        builder.addCase(fetchTopics.fulfilled, (state: UserSliceState, { payload }: any) => {
            if (payload) state.topics = payload;
        })
        builder.addCase(fetchUserScore.fulfilled, (state, { payload }: any) => {
            if (payload) {
                state.score = payload.score;
                state.level = payload.level;
            }
        })
    }
})

export default userSlice.reducer
export const { setCharacter, setScores } = userSlice.actions;