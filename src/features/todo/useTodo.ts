import { useAppSelector } from '@/appHooks';
import { selectTodo } from './todo-selectors';

export const useTodo = () => {
  const items = useAppSelector(selectTodo);

  return { items };
};
