import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({
    user: userReducer
});

const store = configureStore({
    reducer,
    devTools: true
})

export default store;