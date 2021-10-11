import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { counterSlice, initialState } from '@Reducer/';

export const Test = (props) => {
  const [state, dispatch] = useReducer(counterSlice.reducer, initialState);

  return <div></div>;
};

//export const Test = connect(mapStateToProps, counterSlice.actions)(APP);
