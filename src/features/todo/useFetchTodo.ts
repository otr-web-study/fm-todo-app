import { useEffect } from 'react';
import { useAppDispatch } from '@/appHooks';
import { addMany } from './todo-slice';
import data from '@/mock/data.json';

export const useFetchTodo = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addMany(data));
  }, [dispatch]);
};
