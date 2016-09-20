//todo主体组件
import React from 'react';

import ListItem from './todo-item.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
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
                                onClick={() => this.props.onTodoClick(index)}
                            />
                        )}
                    </ul>
            </section>
        );
    }
}

export default Main;