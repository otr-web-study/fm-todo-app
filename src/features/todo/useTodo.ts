import { useAppSelector, useAppDispatch } from '@/appHooks';
import { toggleTodo, deleteTodo } from './todo-slice';
import { selectFilteredTodo } from './todo-selectors';
import { selectFilter } from '@/features/filter/filter-selectors';

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const items = useAppSelector((state) => selectFilteredTodo(state, filter));

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return { items, handleToggleTodo, handleDeleteTodo };
};
