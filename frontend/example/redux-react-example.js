import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider, connect } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

//https://velopert.com/1266
//http://blog.hwahae.co.kr/all/tech/tech-tech/6946/

//https://stackoverflow.com/questions/66277647/how-to-use-redux-toolkit-createslice-with-react-class-components
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
    //console.log(this.increment());

    return (
      <div>
        <div>Count is {this.props.value}</div>
        <button
          onClick={() => {
            this.props.increment();
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            this.props.decrement();
          }}
        >
          decrease
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
});

const ObservableAPP = connect(mapStateToProps, counterSlice.actions)(App);

ReactDOM.render(
  <Provider store={store}>
    <ObservableAPP />
  </Provider>,

  document.getElementById('app1')
);
