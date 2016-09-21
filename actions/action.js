/**
 * action文件，Action向store派发指令，action函数会返回一个带有type的Object，
 * store将会根据不同的type来执行相应的方法。
 * @type {string}
 */
//action静态类型
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_DISPLAY_FILTER = 'SET_DISPLAY_FILTER';

//是否可见
export const DisplayFilter = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_COMPLETED: "SHOW_COMPLETED"
};

//添加todo
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}
//标记完成todo
export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    }
}
//切换展示todo
export function setDisplayFilter(filter) {
    return {
        type: SET_DISPLAY_FILTER,
        filter
    }
}
//删除todo
export function deleteTodo(index) {
    return {
        type: DELETE_TODO,
        index
    }
}
//全选
export function toggleAll(checked) {
    return {
        type: TOGGLE_ALL,
        isChecked: checked
    }
}