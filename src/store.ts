import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '@/features/theme/theme-slice';
import { todoReducer } from './features/todo/todo-slice';
import { filterReducer } from './features/filter/filter-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
    filter: filterReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
