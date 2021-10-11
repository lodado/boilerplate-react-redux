import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
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

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(counterSlice.actions);

    return (
      <div>
        <div>{this.props.store.getState().value}</div>
        <button
          onClick={() => {
            this.props.store.dispatch({ type: 'counter/increment' });
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            this.props.store.dispatch({ type: 'counter/decrement' });
          }}
        >
          decrease
        </button>
      </div>
    );
  }
}

const func = () => {
  ReactDOM.render(
    <App store={store} />,

    document.getElementById('app')
  );
};

store.subscribe(func);
func();
