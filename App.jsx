import React from 'react';
import {connect} from 'react-redux';
import Header from './components/todo-header.jsx';
import Main from './components/todo-main.jsx';
import Footer from './components/todo-footer.jsx';
import {
    addTodo,
    completeTodo,
    setDisplayFilter,
    DisplayFilter
} from './actions/action'

class App extends React.Component {
    render() {
        const {
            dispatch,
            visibleTodos,
            displayFilter
        } = this.props;
        console.log('列表', visibleTodos);
        return (
            <section id="todo_app">
                <Header onAddTodo={text => dispatch(addTodo(text))}/>
                <Main todos={visibleTodos}
                      onTodoClick={index => dispatch(completeTodo(index))}
                />
                <Footer />
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

function checked(state) {
    return {
        visibleTodos: checkTodos(state.todos, state.displayFilter),
        displayFilter: state.displayFilter
    }
}

export default connect(checked)(App);