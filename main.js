import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App.jsx';
import todoReducer from './reducers/reducers';
import './dist/todo.less';

let store = createStore(todoReducer);
let rootElement = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);