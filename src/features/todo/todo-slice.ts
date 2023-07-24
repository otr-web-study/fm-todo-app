import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { type Todo } from '@/types/Todo';
import data from '@/mock/data.json';

interface TodoSlice {
  list: Todo[];
}
const initialState: TodoSlice = {
  list: data,
};

export const todoSlice = createSlice({
  name: '@@todo',
  initialState,
  reducers: {
    addMany: (_, action: PayloadAction<Todo[]>) => ({ list: action.payload }),
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.list.push(action.payload);
      },
      prepare: (title: string) => ({
        payload: {
          id: nanoid(),
          completed: false,
          title,
        },
      }),
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => ({
      list: state.list.filter((t) => t.id !== action.payload),
    }),
  },
});

export const todoReducer = todoSlice.reducer;
export const { addMany, addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
