import { useAppSelector, useAppDispatch } from '@/appHooks';
import { toggleTodo, deleteTodo, addMany } from './todo-slice';
import { selectFilteredTodo, selectTodo } from './todo-selectors';
import { selectFilter, selectFiltered } from '@/features/filter/filter-selectors';
import { Todo } from '@/types/Todo';

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const filtered = useAppSelector(selectFiltered);
  const filteredItems = useAppSelector((state) => selectFilteredTodo(state, filter));
  const items = useAppSelector(selectTodo);

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleReorder = (reorderedItems: Todo[]) => {
    if (!filtered) {
      dispatch(addMany(reorderedItems));
      return;
    }

    const ids = Object.fromEntries(reorderedItems.map((item) => [item.id, true]));
    const reorderedReversed = reorderedItems.reverse();

    const orderedItems = items.map(
      (item) => (ids[item.id] ? reorderedReversed.pop() : item) as Todo,
    );
    dispatch(addMany(orderedItems));
  };

  return { items: filteredItems, handleToggleTodo, handleDeleteTodo, handleReorder };
};
