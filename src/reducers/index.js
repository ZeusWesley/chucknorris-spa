import { categoryReducer } from './categoryReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    categories: categoryReducer,
});
