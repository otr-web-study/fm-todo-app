import { styled } from 'styled-components';
import { useTheme } from './use-theme';
import { ReactComponent as IMoon } from '@/assets/images/icon-moon.svg';
import { ReactComponent as ISun } from '@/assets/images/icon-sun.svg';

const Wrapper = styled.div`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return <Wrapper onClick={toggleTheme}>{theme === 'light' ? <IMoon /> : <ISun />}</Wrapper>;
};
