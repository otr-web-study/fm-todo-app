import { styled } from 'styled-components';
import { ThemeSwitcher } from '@/features/theme/ThemeSwitcher';

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 46px 0 33px;

  @media (min-width: 640px) {
    padding: 80px 0 50px;
  }
`;

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 28px;
  letter-spacing: 9px;

  @media (min-width: 640px) {
    font-size: 42px;
    letter-spacing: 12px;
  }
`;

export const Header = () => {
  return (
    <HeaderEl>
      <Title>todo</Title>
      <ThemeSwitcher />
    </HeaderEl>
  );
};
