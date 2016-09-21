/**
 * main.js入口文件，把App和redux建立联系，Provider是react-redux的组件，
 * 用于将store和视图绑定在一起，Store就是那个唯一的State树。当Store发生变化时，
 * 整个App就会做出相应的变化，这里的会传进Provider的props.children里。
 */
import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App.jsx';
import todoReducer from './reducers/reducers';
import './dist/todo.less';

/**
 * 创建store, 传入两个参数，
 * 参数1: reducer 用来修改state，
 * 参数2(可选): [], 默认的state值,如果不传, 则为undefined
 */
let store = createStore(todoReducer);

/**
 * 通过 store.getState() 可以获取当前store的状态(state)
 * @type {Element}
 */
let rootElement = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);