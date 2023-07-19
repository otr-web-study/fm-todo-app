import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface AppThemeProviderProps {
  children: ReactNode;
}

const darkTheme = {
  bgDesktop: 'assets/images/bg-desktop-dark.jpg',
  bgMobile: 'assets/images/bg-mobile-dark.jpg',
};

const lightTheme = {
  bgDesktop: 'assets/images/bg-desktop-light.jpg',
  bgMobile: 'assets/images/bg-mobile-light.jpg',
};

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};
