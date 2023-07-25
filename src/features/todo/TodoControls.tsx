import { styled } from 'styled-components';
import { Filter } from '@/features/filter/Filter';
import { useControls } from './useControls';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: transparent;
  grid-row-gap: 15px;
  box-shadow: -10px 0px 13px 0px rgba(0, 0, 0, 0.03), 10px 0px 13px 0px rgba(0, 0, 0, 0.03),
    0px 9px 13px 0px rgba(0, 0, 0, 0.03);
  background-image: linear-gradient(rgba(0, 0, 0, 0.09), transparent);

  & > :nth-child(2) {
    grid-column: 1 / span 2;
    border-radius: var(--radii);
    font-size: 16px;
  }

  & button,
  p {
    font-size: 12px;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);

    & > :nth-child(2) {
      grid-column: 2;
      border-radius: unset;
    }

    & button,
    p {
      font-size: 14px;
    }
  }
`;

const TextLeft = styled.p`
  display: flex;
  align-items: center;
  min-height: 50px;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.fcLight};
  padding-left: 18px;
  grid-column: 1;
  border-bottom-left-radius: var(--radii);

  @media (min-width: 640px) {
    padding-left: 24px;
  }
`;

const ButtonClear = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.fcLight};
  padding: 0;
  cursor: pointer;
  font-family: var(--family);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.fcHover};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${({ theme }) => theme.bgSecondary};
  grid-row: 1;
  grid-column: 2;
  padding: 10px 18px 10px 0;
  border-bottom-right-radius: var(--radii);

  @media (min-width: 640px) {
    grid-column: 3;
    padding-right: 24px;
  }
`;

export const TodoControls = () => {
  const { left, handleClearCompleted } = useControls();

  return (
    <Wrapper>
      <TextLeft>{left} items left</TextLeft>
      <Filter />
      <ButtonWrapper>
        <ButtonClear aria-label="Clear completed" onClick={handleClearCompleted}>
          Clear Completed
        </ButtonClear>
      </ButtonWrapper>
    </Wrapper>
  );
};
