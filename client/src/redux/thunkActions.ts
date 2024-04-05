import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { ILoginEmailPassword, ILoginPassword, IUser } from '../types/types';



// export const fetchTodos = createAsyncThunk('todos/all', async () => {
//   // 'posts/all' = это не URL
//   try {
//     const response = await axios.get<ITask[]>(
//       'http://localhost:3000/api/todos'
//     ); // URL ТУТ
//     return response.data; //* это payload
//   } catch (error) {
//     console.log(error);
//   }
// });

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