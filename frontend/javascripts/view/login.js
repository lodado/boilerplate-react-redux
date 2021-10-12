import React, { useEffect} from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '@Component/CustomButton';

export const LoginView = (props) => {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();

    return (
      <div className='loginView'>
        <img  alt='logo-image'></img>

        <CustomButton name={'로그인'}/>
      </div>
    );
}