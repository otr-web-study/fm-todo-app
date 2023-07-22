import { useAppSelector, useAppDispatch } from '@/appHooks';
import { toggleTodo, deleteTodo } from './todo-slice';
import { selectTodo } from './todo-selectors';

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectTodo);

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return { items, handleToggleTodo, handleDeleteTodo };
};
