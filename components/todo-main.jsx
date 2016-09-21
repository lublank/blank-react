//todo主体组件
import React from 'react';

import ListItem from './todo-item.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            toggleAll,
            onTodoClick,
            onDeleteClick,
            onToggleClick
        } = this.props;
        return (
            <section id="main">
                <a className={toggleAll ? "icon" : "icon checked"}
                   id="toggle_all"
                   onClick={() => onToggleClick(toggleAll)}
                ></a>
                <ul id="todo_list">
                    {this.props.todos.map((todo, index) =>
                        <ListItem {...todo}
                            key={index}
                            timpIndex={index}
                            onClick={() => {onTodoClick(index); console.log(index);}}
                            onDelClick={() => onDeleteClick(index)}
                        />
                    )}
                </ul>
            </section>
        );
    }
}

export default Main;