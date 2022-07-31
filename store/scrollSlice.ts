import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: false,
  reducers: {
    setScroll(_, { payload }: PayloadAction<boolean>) {
      return payload;
    },
  },
});

export const { setScroll } = scrollSlice.actions;
