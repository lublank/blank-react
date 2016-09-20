//action静态类型
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_DISPLAY_FILTER = 'SET_DISPLAY_FILTER';

//是否可见
export const DisplayFilter = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_COMPLETED: "SHOW_COMPLETED"
};

//action 创建函数
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    }
}

export function setDisplayFilter(filter) {
    return {
        type: SET_DISPLAY_FILTER,
        filter
    }
}