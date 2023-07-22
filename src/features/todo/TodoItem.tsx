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
  min-height: 53px;
  border-bottom: 1px solid ${(props) => props.theme.fcVeryLight};

  @media (min-width: 640px) {
    min-height: 65px;
    padding-inline: 22px;
    gap: 22px;

    &:hover > button {
      opacity: 1;
    }
  }
`;

const Text = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.fc};
  letter-spacing: -0.2px;

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

const DeleteButton = styled.button`
  border: none;
  width: 14px;
  aspect-ratio: 1/1;
  background-image: var(--icon-cross);
  background-size: cover;
  background-color: transparent;
  transition: scale 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }

  @media (min-width: 640px) {
    width: 18px;
    opacity: 0;
  }
`;

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: () => void;
  onDeleteTodo: () => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <Wrapper>
      <StyledCheckbox checked={todo.completed} onChange={onToggleTodo} />
      <Text>{todo.title}</Text>
      <DeleteButton onClick={onDeleteTodo} />
    </Wrapper>
  );
};
