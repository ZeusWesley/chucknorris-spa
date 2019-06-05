import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';
import {fetchCategories, loadCategories} from './actions/Categories';
import * as serviceWorker from './serviceWorker';

store.dispatch(fetchCategories());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
