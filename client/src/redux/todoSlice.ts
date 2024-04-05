import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, fetchAddTodo, fetchDeleteTodo, fetchUpdateTodo} from './thunkActions'
import { ITask } from '../types/types';

export type TodoSliceState = {
    todos: ITask[]; //Array<IPost>
    editTodo: ITask;
    // isLoading: boolean;
  };
  
  const initialState: TodoSliceState = {
    todos: [],
    editTodo: { id: null, title: '', status: false }
    // isLoading: true,
  };

  const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
      editCardTodo(state: TodoSliceState, { payload }) {
        state.editTodo = payload;
      }
    },
    extraReducers: (builder) => {
          builder.addCase(fetchTodos.fulfilled, (state: TodoSliceState, { payload }) => {
            state.todos = payload as ITask[]; // payload это response.data из thunk
          });
          builder.addCase(fetchAddTodo.fulfilled, (state: TodoSliceState, { payload }) => {
            state.todos.unshift(payload as ITask); // данные из inputs от fetchAddTask
          });
          builder.addCase(fetchDeleteTodo.fulfilled, (state: TodoSliceState, { payload }) => {
            state.todos = state.todos.filter((el) => el.id !== payload);
          });
          builder.addCase(fetchUpdateTodo.fulfilled, (state: TodoSliceState, { payload }) => {
            const todo = state.todos.find(el => el.id === payload.id ) as ITask;
            todo.status = payload.status
            todo.title = payload.title
          });
    }
  })

  export default todoSlice.reducer;
  export const { editCardTodo } = todoSlice.actions;