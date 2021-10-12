import {rootReducer} from '@Reducer/';
import { configureStore, createSlice} from '@reduxjs/toolkit';

const rootStore = configureStore({
    reducer: rootReducer,
});

export default rootStore;