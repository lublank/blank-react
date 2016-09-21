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
            onClick
        } = this.props;
console.log(timpIndex);
        return (
            <li key={timpIndex}
                className={this.props.completed ? "completed" : ""}
                >
                <div>
                    <input type="checkbox"
                           className="toggle"
                           onClick={onClick}
                    />
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