import { RootState } from '@/store';

export const selectTodo = (state: RootState) => state.todo.list;
export const selectLeftTodo = (state: RootState) =>
  state.todo.list.filter((item) => !item.completed).length;
