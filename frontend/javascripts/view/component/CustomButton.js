import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { counterSlice, initialState } from '@Reducer/';

const CustomButton = (props) => {
  const [state, dispatch] = useReducer(counterSlice.reducer, initialState);

  const { name } = props;

  return <button className="customButton">{name}</button>;
};

export default CustomButton;

//export const Test = connect(mapStateToProps, counterSlice.actions)(APP);
