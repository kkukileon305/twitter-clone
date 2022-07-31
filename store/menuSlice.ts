import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: false,
  reducers: {
    setMenu(state, { payload }: PayloadAction<boolean>) {
      return payload;
    },
  },
});
export const { setMenu } = menuSlice.actions;
