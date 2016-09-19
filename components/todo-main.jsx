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
                <input type="checkbox" id="toggle_all" />
                    <ul id="todo_list">
                        <ListItem />
                    </ul>
            </section>
        );
    }
}

export default Main;