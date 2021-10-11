import { counterSlice } from '@Reducer/';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: counterSlice.reducer,
});

export { store };
