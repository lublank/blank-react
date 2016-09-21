import React from 'react';
import {connect} from 'react-redux';
import Header from './components/todo-header.jsx';
import Main from './components/todo-main.jsx';
import Footer from './components/todo-footer.jsx';
import {
    addTodo,
    deleteTodo,
    completeTodo,
    setDisplayFilter,
    toggleAll,
    DisplayFilter
} from './actions/action'

class App extends React.Component {
    render() {
        const {
            dispatch,
            visibleTodos,
            itemLeft,
            emptyTodos,
            displayFilter
        } = this.props;

        let todoList = '',
            todoFooter;
        //当有list时才显示main列表
        if(emptyTodos) {
            todoList = <Main todos={visibleTodos}
                             toggleAll={!!itemLeft}
                             onTodoClick={index => dispatch(completeTodo(index))}
                             onDeleteClick={index => dispatch(deleteTodo(index))}
                             onToggleClick={isChecked => dispatch(toggleAll(isChecked))}
                        />;
        }

        if(emptyTodos) {
            todoFooter = <Footer itemLeft={itemLeft}
                                 filter={displayFilter}
                                 onSetFilter={filter => dispatch(setDisplayFilter(filter))}
                        />;
        }

        return (
            <section id="todo_app">
                <Header onAddTodo={text => dispatch(addTodo(text))}/>
                {todoList}
                {todoFooter}
            </section>
        );
    }
}

//根据completed状态筛选选中状态的todos
function checkTodos(todos, filter) {
    switch (filter) {
        case DisplayFilter.SHOW_ALL:
            return todos;
        case DisplayFilter.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case DisplayFilter.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
    }
}
//计算剩余任务数
function getItemLeft(todos) {
    let activeList = todos.filter(todo => !todo.completed);
    return activeList.length;
}
//which props do we want to inject.
function injectState(state) {
    //console.log(state);
    return {
        visibleTodos: checkTodos(state.todos, state.displayFilter), //当前状态下要显示的列表
        displayFilter: state.displayFilter,  //当前状态
        emptyTodos: state.todos.length, //是否有todo list，用于是否显示footer
        itemLeft: getItemLeft(state.todos)  //剩余todo事项
    }
}

/**
 * 注入 dispatch 和 state 到其默认的 connect(checked)(App) 中
 * 通过react-redux提供的connect函数把state和action转换为当前组件所需要的props
 */
export default connect(injectState)(App);