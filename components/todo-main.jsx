//todo主体组件
import React from 'react';

import ListItem from './todo-item.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    //全选
    onClickAll(e) {
        console.log('全选');
    }
    render() {
        return (
            <section id="main">
                <input type="checkbox"
                       id="toggle_all"
                       onClick={this.onClickAll}
                />
                <ul id="todo_list">
                    {this.props.todos.map((todo, index) =>
                        <ListItem {...todo}
                            key={index}
                            timpIndex={index}
                            onClick={() => this.props.onTodoClick(index)}
                            onDelClick={() => this.props.onDeleteClick(index)}
                        />
                    )}
                </ul>
            </section>
        );
    }
}

export default Main;