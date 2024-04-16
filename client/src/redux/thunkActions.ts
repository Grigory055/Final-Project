import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { IGameStat, ILoginEmailPassword, ILoginPassword, IUser } from '../types/types';



export const fetchStats = createAsyncThunk('stats/user', async () => {
  try {
    const response = await axios.get<IGameStat[]>('http://localhost:3000/api/games/stats');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchTopics = createAsyncThunk('topics/all', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/topics');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchUserLogin = createAsyncThunk(
  'user/login', 
  async(loginPassword: IUser) => {
    try {
      const response = await axios.post<AxiosResponse<IUser>>('http://localhost:3000/api/users/login', 
      loginPassword, { withCredentials: true })
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
)

export const fetchUserLogout = createAsyncThunk(
  'user/logout', 
  async() => {
    try {
      const response = await axios.get('http://localhost:3000/api/users/logout', { withCredentials: true })
      return response.status;
    } catch (error) {
      console.log(error)
    }
  }
)

export const fetchUserRegister = createAsyncThunk(
  'user/register', 
  async(user: IUser) => {
    try {
      const response = await axios.post<AxiosResponse<IUser>>('http://localhost:3000/api/users/registration', 
      user, { withCredentials: true })
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
)