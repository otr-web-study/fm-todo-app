import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '@/appHooks';
import { selectTheme } from './theme-selectors';

interface AppThemeProviderProps {
  children: ReactNode;
}

const darkTheme = {
  /* Bg images */
  bgDesktop: 'assets/images/bg-desktop-dark.jpg',
  bgMobile: 'assets/images/bg-mobile-dark.jpg',
  /* Colors */
  bg: 'hsl(235, 21%, 11%)',
  bgSecondary: 'hsl(235, 24%, 19%)',
  fcLight: 'hsl(234, 39%, 85%)',
};

const lightTheme = {
  /* Bg images */
  bgDesktop: 'assets/images/bg-desktop-light.jpg',
  bgMobile: 'assets/images/bg-mobile-light.jpg',
  /* Colors */
  bg: 'hsl(0, 0%, 98%)',
  bgSecondary: 'white',
  fcLight: 'hsl(233, 11%, 84%)',
};

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
  );
};
