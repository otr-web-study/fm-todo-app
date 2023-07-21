import { type FC } from 'react';
import { styled } from 'styled-components';
import { type Todo } from '@/types/Todo';
import { StyledCheckbox } from '@/components/StyledCheckbox';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  gap: 10px;
  padding: 5px 18px;
  min-height: 52px;
  border-bottom: 1px solid ${(props) => props.theme.fcVeryLight};
`;

const Text = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.fc};

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <Wrapper>
      <StyledCheckbox checked={todo.completed} onChange={() => console.log('hi')} />
      <Text>{todo.title}</Text>
    </Wrapper>
  );
};
