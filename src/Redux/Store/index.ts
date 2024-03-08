import { configureStore } from '@reduxjs/toolkit';
import galleriesReducer from '../Features/gallery';

export const store = configureStore({
  reducer: {
    galleries: galleriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
