/**
 * Reducer文件，Redux有且只有一个State状态树，Reducers就是负责整理整个State树的，
 * Reducers可以被分成一个个Reducer。
 * Redux提供的combineReducers函数可以帮助我们把reducer组合在一起，这样就可以把Reducers拆分成一个个小的Reducer来管理Store了。
 */
import {combineReducers} from 'redux';
import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SET_DISPLAY_FILTER,
    DisplayFilter
} from '../actions/action';
const {SHOW_ALL} = DisplayFilter;

function displayFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_DISPLAY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
/**
 * reducer修改state状态，返回新的state，
 * 传入两个参数：state、action
 */

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    //key: action.key,
                    completed: false
                }
            ];
        case DELETE_TODO:
            return [
                ...state.slice(0, action.index),    //先把当前位置的前面部分截取，
                ...state.slice(action.index + 1)    //再把当前位置的后面部分接上
            ];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),    //先把当前位置的前面部分截取，
                Object.assign({}, state[action.index], {
                    completed: !state[action.index].completed //当前位置的completed设置为true/false，
                }),
                ...state.slice(action.index + 1)    //再把当前位置的后面部分接上
            ];
        default:
            return state;
    }
}

const todoReducer = combineReducers({
    displayFilter,
    todos
});

export default todoReducer;