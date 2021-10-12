import React, { useEffect} from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import {StyledButton} from '@Style';

const CustomButton = (props) => {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    
    const {name} = props;

    return (
      <StyledButton className="customButton">
          {name}
      </StyledButton>
    );
}

export default CustomButton;

//export const Test = connect(mapStateToProps, counterSlice.actions)(APP);
