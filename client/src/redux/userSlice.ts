import { createSlice } from '@reduxjs/toolkit';
import { fetchTopics, fetchUserLogin, fetchUserLogout, fetchUserRegister } from './thunkActions';
import { ICard } from '../types/types';

export type UserSliceState = {
    isLogin: boolean,
    login: string,
    topics: ICard[],
}

const initialState: UserSliceState = {
    isLogin: false,
    login: 'Гость',
    topics: [],
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
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
            if (payload === 200) state.isLogin = false
        })
        builder.addCase(fetchTopics.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload) state.topics = payload;
        })
    }
})

export default userSlice.reducer