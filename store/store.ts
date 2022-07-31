import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { menuSlice } from './menuSlice';
import { scrollSlice } from './scrollSlice';

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    isScrollUp: scrollSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
