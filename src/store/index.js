import { createStore, applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import thunk from 'redux-thunk';

import {connectRouter} from 'connected-react-router';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

export const store = createStore(connectRouter(history)(Reducers), applyMiddleware(thunk));
