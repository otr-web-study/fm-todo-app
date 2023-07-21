import { styled } from 'styled-components';
import { useTheme } from './use-theme';
import { ReactComponent as Moon } from '@/assets/images/icon-moon.svg';
import { ReactComponent as Sun } from '@/assets/images/icon-sun.svg';

const Wrapper = styled.div`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

const IMoon = styled(Moon)`
  transform: scale(0.8);

  @media (min-width: 640px) {
    transform: scale(1);
  }
`;

const ISun = styled(Sun)`
  transform: scale(0.8);

  @media (min-width: 640px) {
    transform: scale(1);
  }
`;

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return <Wrapper onClick={toggleTheme}>{theme === 'light' ? <IMoon /> : <ISun />}</Wrapper>;
};
