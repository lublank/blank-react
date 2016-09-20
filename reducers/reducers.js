import {combineReducers} from 'redux';
import {
    ADD_TODO,
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
//todo操作reducer设置状态
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
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