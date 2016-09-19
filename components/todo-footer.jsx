//todofooter组件
import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer id="footer">
                <span id="todo_count"><strong>0</strong> items left</span>
                <ul id="filters">
                    <li><a href="javascript:" data-id="all" className="selected">All</a></li>
                    <li><a href="javascript:" data-id="active" className="">Active</a></li>
                    <li><a href="javascript:" data-id="completed" className="">Completed</a></li>
                </ul>
                <button id="clear_completed">Clear completed</button>
            </footer>
        );
    }
}

export default Footer;