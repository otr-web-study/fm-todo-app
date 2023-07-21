import { type ChangeEvent, useState, FormEvent } from 'react';
import { useAppDispatch } from '@/appHooks';
import { addTodo } from './todo-slice';

export const useNewTodo = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (value) {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return { value, handleChange, handleSubmit };
};
