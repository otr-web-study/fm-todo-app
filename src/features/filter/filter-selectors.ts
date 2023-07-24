import { RootState } from '@/store';

export const selectFilter = (state: RootState) => state.filter;
export const selectFiltered = (state: RootState) => state.filter !== 'all';
