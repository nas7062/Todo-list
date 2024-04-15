import { configureStore } from '@reduxjs/toolkit';
import  todoSlice from "../reducers/todo";
import eventSilce from '../reducers/event';
import themeSlice from '../reducers/theme';
export const store = configureStore({
  reducer: {
    todos :todoSlice,
    event :eventSilce.reducer,
    theme :themeSlice.reducer,
  },
});
