import { createSlice } from '@reduxjs/toolkit';
import { fetchUserLogin, fetchUserRegister } from './thunkActions';

export type UserSliceState = {
    isLogin: boolean
}

const initialState: UserSliceState = {
    isLogin: false
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserLogin.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload) state.isLogin = true
        }),
        builder.addCase(fetchUserRegister.fulfilled, (state: UserSliceState, { payload }) => {
            if (payload) state.isLogin = true
        })
    }
})

export default userSlice.reducer