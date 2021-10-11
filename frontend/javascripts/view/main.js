import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { counterSlice, initialState } from '@Reducer/';
import { store } from '../store';

export const MainView = (props) => {
  const [state, dispatch] = useReducer(counterSlice.reducer, initialState);

  const handleKeyPress = ({ key }) => {
    switch (key) {
      case 'ArrowUp':
        dispatch({ type: 'move/top' });
        break;
      case 'ArrowDown':
        dispatch({ type: 'move/bottom' });
        break;
      case 'ArrowLeft':
        dispatch({ type: 'move/left' });
        break;
      case 'ArrowRight':
        dispatch({ type: 'move/right' });
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div className="mainView">
      main{state.x} {state.y}
    </div>
  );
};
