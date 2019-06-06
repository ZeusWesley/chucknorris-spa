import { categoryReducer } from './categoryReducer';
import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router'
import history from '../store/history';

export const Reducers = combineReducers({
    categories: categoryReducer,
    router: connectRouter(history)
});
