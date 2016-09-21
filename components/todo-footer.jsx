//todofooter组件
import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    //组装li
    liList(filter, name) {
        return (
            <li>
                <a href={'#' + name}
                   className={filter === this.props.filter ? "selected" : ""}
                   onClick={e => {
                   e.preventDefault();
                   this.props.onSetFilter(filter);
                   }}>
                    {name}
                </a>
            </li>
        );
    }
    render() {
        return (
            <footer id="footer">
                <span id="todo_count"><strong>{this.props.itemLeft}</strong> items left</span>
                <ul id="filters">
                    {this.liList('SHOW_ALL', 'All')}
                    {this.liList('SHOW_ACTIVE', 'Active')}
                    {this.liList('SHOW_COMPLETED', 'Completed')}
                </ul>
                <button id="clear_completed">Clear completed</button>
            </footer>
        );
    }
}

export default Footer;