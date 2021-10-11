import { configureStore, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: 0,
  x: 0,
  y: 0,
};

export const counterSlice = createSlice({
  name: 'move',
  initialState: initialState,
  reducers: {
    top: (state) => {
      state.y -= 1;
      //state.y = Math.max(0, state.y - 1);
    },
    bottom: (state) => {
      state.y += 1;
      //state.y = Math.max(0, state.y + 1);
    },
    left: (state) => {
      state.x = Math.max(0, state.x - 1);
    },
    right: (state) => {
      state.x = Math.max(0, state.x + 1);
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
//counterSlice.reducers;
