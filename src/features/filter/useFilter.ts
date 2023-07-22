import { useAppDispatch, useAppSelector } from '@/appHooks';
import { setFilter, type Filter } from './filter-slice';
import { selectFilter } from './filter-selectors';

export const useFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const handleSetFilter = (value: Filter) => {
    dispatch(setFilter(value));
  };

  return { filter, handleSetFilter };
};
