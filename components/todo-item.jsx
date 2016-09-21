//todoListItem组件
import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {
            timpIndex,
            text,
            onClick,
            completed
        } = this.props;

        return (
            <li key={timpIndex}
                className={completed ? "completed" : ""}
                >
                <div>
                    <div className="toggle">
                        <a className={completed ? "icon checked" : "icon"}
                           onClick={onClick}
                        ></a>
                    </div>
                        <label>{text}</label>
                        <button className="destroy"
                                onClick={this.props.onDelClick}
                        ></button>
                </div>
            </li>
        );
    }
}

export default ListItem;