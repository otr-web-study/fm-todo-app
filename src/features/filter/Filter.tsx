import { styled } from 'styled-components';
import { type Filter as TFilter } from './filter-slice';
import { StyledRadiobutton } from '@/components/StyledRadiobutton';
import { useFilter } from './useFilter';

const filterItems: TFilter[] = ['all', 'active', 'completed'];

const Wrapper = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.fcLight};

  @media (min-width: 640px) {
    gap: 18px;
  }
`;

export const Filter = () => {
  const { filter, handleSetFilter } = useFilter();

  return (
    <Wrapper>
      <StyledRadiobutton items={filterItems} checked={filter} onChange={handleSetFilter} />
    </Wrapper>
  );
};
