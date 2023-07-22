import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Filter = 'all' | 'active' | 'completed';

const filterSlice = createSlice({
  name: '@@filter',
  initialState: 'all' as Filter,
  reducers: {
    setFilter: (_, action: PayloadAction<Filter>) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
