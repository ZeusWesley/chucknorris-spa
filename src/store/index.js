import { createStore, applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import thunk from 'redux-thunk';

import {connectRouter} from 'connected-react-router';

import {createHashHistory} from 'history';

const history = createHashHistory({
    basename: process.env.PUBLIC_URL,
});

export const store = createStore(connectRouter(history)(Reducers), applyMiddleware(thunk));
