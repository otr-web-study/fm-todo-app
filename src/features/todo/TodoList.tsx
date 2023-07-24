import { styled } from 'styled-components';
import { Reorder, AnimatePresence } from 'framer-motion';
import { useTodo } from './useTodo';
import { TodoItem } from './TodoItem';

const variants = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
};

const List = styled(Reorder.Group).withConfig({
  shouldForwardProp: (prop) => 'axis' !== prop,
})`
  margin-top: 18px;
  padding: 0;
  list-style: none;
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: var(--radii) var(--radii);
  box-shadow: -10px 0px 13px 0px rgba(0, 0, 0, 0.03), 10px 0px 13px 0px rgba(0, 0, 0, 0.03);

  @media (min-width: 640px) {
    margin-top: 25px;
  }
`;

const ListItem = styled(Reorder.Item)`
  cursor: grab;
`;

export const TodoList = () => {
  const { items, handleToggleTodo, handleDeleteTodo, handleReorder } = useTodo();

  const content = items.map((item) => (
    <ListItem
      key={item.id}
      value={item}
      id={item.id}
      whileDrag={{
        scale: 1.05,
        boxShadow: '5px 5px 10px rgba(0,0,0,0.3)',
      }}
      {...variants}
    >
      <TodoItem
        todo={item}
        onToggleTodo={() => handleToggleTodo(item.id)}
        onDeleteTodo={() => handleDeleteTodo(item.id)}
      />
    </ListItem>
  ));

  return (
    <List axis="y" values={items} onReorder={handleReorder}>
      <AnimatePresence>{content}</AnimatePresence>
    </List>
  );
};
