import { createSlice } from '@reduxjs/toolkit';
import { fetchUserLogin, fetchUserLogout, fetchUserRegister } from './thunkActions';

export type UserSliceState = {
    isLogin: boolean,
    login: string,
}

const initialState: UserSliceState = {
    isLogin: false,
    login: 'Гость'
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
    }
})

export default userSlice.reducer