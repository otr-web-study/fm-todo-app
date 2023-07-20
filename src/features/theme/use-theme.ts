import { useAppDispatch, useAppSelector } from '@/appHooks';

import { setTheme } from './theme-slice';
import { selectTheme } from './theme-selectors';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
};
