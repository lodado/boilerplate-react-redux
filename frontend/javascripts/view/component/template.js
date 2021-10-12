import React, { useEffect} from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

export const Template = (props) => {
  //const [state, dispatch] = useReducer(counterSlice.reducer, initialState);

  const state = useSelector(state=>state);
  const dispatch = useDispatch();

  return (
    <div>
      
    </div>
  );
}


//export const Test = connect(mapStateToProps, counterSlice.actions)(APP);
