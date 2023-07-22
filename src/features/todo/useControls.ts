import { useAppSelector, useAppDispatch } from '@/appHooks';
import { addMany } from './todo-slice';
import { selectTodo } from './todo-selectors';
import { selectLeftTodo } from './todo-selectors';

export const useControls = () => {
  const dispatch = useAppDispatch();
  const left = useAppSelector(selectLeftTodo);
  const items = useAppSelector(selectTodo);

  const handleClearCompleted = () => {
    dispatch(addMany(items.filter((i) => !i.completed)));
  };

  return { left, handleClearCompleted };
};
