import { styled } from 'styled-components';
import { useTodo } from './useTodo';
import { TodoItem } from './TodoItem';

const List = styled.ul`
  margin-top: 18px;
  padding: 0;
  list-style: none;
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: var(--radii) var(--radii);

  @media (min-width: 640px) {
    margin-top: 25px;
  }
`;

export const TodoList = () => {
  const { items, handleToggleTodo, handleDeleteTodo } = useTodo();

  const content = items.map((item) => (
    <li key={item.id}>
      <TodoItem
        todo={item}
        onToggleTodo={() => handleToggleTodo(item.id)}
        onDeleteTodo={() => handleDeleteTodo(item.id)}
      />
    </li>
  ));

  return <List>{content}</List>;
};
