import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { counterSlice, initialState } from '@Reducer/';
import CustomButton from '@Component/CustomButton';

export const LoginView = (props) => {
  const [state, dispatch] = useReducer(counterSlice.reducer, initialState);

  return (
    <div className="loginView">
      <img src="aaa" alt="logo-image"></img>

      <CustomButton name={'로그인'} />
    </div>
  );
};
