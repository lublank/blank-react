//todoListItem组件
import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={this.props.completed ? "completed" : ""}>
                <div>
                    <input type="checkbox"
                           className="toggle"
                           onClick={this.props.onClick}
                    />
                        <label>{this.props.text}</label>
                        <button className="destroy"></button>
                </div>
            </li>
        );
    }
}

export default ListItem;