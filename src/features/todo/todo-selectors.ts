import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { Filter } from '@/features/filter/filter-slice';

export const selectTodo = (state: RootState) => state.todo.list;

export const selectLeftTodo = (state: RootState) =>
  state.todo.list.filter((item) => !item.completed).length;

export const selectFilteredTodo = createSelector(
  [selectTodo, (_, filter: Filter) => filter],
  (items, filter) =>
    items.filter(
      (t) =>
        filter === 'all' ||
        (filter === 'active' && !t.completed) ||
        (filter === 'completed' && t.completed),
    ),
);
