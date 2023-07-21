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
  fcVeryLight: 'hsl(237, 14%, 26%)',
  fcLight: 'hsl(234, 11%, 52%)',
  fc: 'hsl(234, 39%, 85%)',
};

const lightTheme = {
  /* Bg images */
  bgDesktop: 'assets/images/bg-desktop-light.jpg',
  bgMobile: 'assets/images/bg-mobile-light.jpg',
  /* Colors */
  bg: 'hsl(0, 0%, 98%)',
  bgSecondary: 'white',
  fcVeryLight: 'hsl(236, 33%, 92%)',
  fcLight: 'hsl(236, 9%, 61%)',
  fc: 'hsl(235, 19%, 35%)',
};

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
  );
};
