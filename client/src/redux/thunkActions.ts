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

// export const fetchAddTodo = createAsyncThunk(
//   'todos/add',
//   async (title: string) => {
//     try {
//       const response = await axios.post<ITask, AxiosResponse<ITask>>(
//         `http://localhost:3000/api/todos`,
//         { title, status: false }
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const fetchDeleteTodo = createAsyncThunk(
//   'todos/del',
//   async (id: number) => {
//     try {
//       // console.log(id)
//       const response = await axios.delete(
//         `http://localhost:3000/api/todos/${id}`
//       );
      
//       if (response.status === 200) {
//         return id;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const fetchUpdateTodo = createAsyncThunk(
//   'todos/update',
//   async (todo: ITask) => {
//     try {
//       const { id } = todo
//       console.log(todo)
//       const response = await axios.patch(
//         `http://localhost:3000/api/todos/${id}`,
//         todo
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const fetchUserLogin = createAsyncThunk(
  'user/login', 
  async(loginPassoword: ILoginPassword) => {
    try {
      const response = await axios.post<AxiosResponse<IUser>>('http://localhost:3000/api/users/login', 
      loginPassoword, { withCredentials: true })
      console.log('=====', response.data)
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
  async(loginEmailPassoword: ILoginEmailPassword) => {
    try {
      const response = await axios.post<AxiosResponse<IUser>>('http://localhost:3000/api/users/registration', 
      loginEmailPassoword, { withCredentials: true })
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
)

export const fetchUserScore = createAsyncThunk(
  '/user/score',
  async(score: number) => {
    try {
      // console.log('score ======', score)
      const response = await axios.put<AxiosResponse>('http://localhost:3000/api/games', { score }, { withCredentials: true })
      console.log('score ======', score)
      console.log('response', response.data)
    } catch (error) {
      console.log(error)
    }
  }
)