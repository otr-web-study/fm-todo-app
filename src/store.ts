import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '@/features/theme/theme-slice';
import { todoReducer } from './features/todo/todo-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
