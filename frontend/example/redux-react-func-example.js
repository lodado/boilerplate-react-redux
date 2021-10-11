import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider, connect } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

//https://velopert.com/1266
//http://blog.hwahae.co.kr/all/tech/tech-tech/6946/

//https://stackoverflow.com/questions/66277647/how-to-use-redux-toolkit-createslice-with-react-class-components

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
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
export default counterSlice.reducer;

const store = configureStore({
  reducer: counterSlice.reducer,
});

store.subscribe(() => {
  console.log(store.getState());
});

const App = (props) => {
  const [state, dispatch] = useReducer(counterSlice.reducer, initialState);

  return (
    <div>
      <div>Count is {state.value}</div>
      <button
        onClick={() => {
          dispatch({ type: 'counter/increment' });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'counter/decrement' });
        }}
      >
        decrease
      </button>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app2')
);
