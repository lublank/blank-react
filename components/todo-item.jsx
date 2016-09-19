//todoListItem组件
import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="completed">
                <div>
                    <input type="checkbox" className="toggle" />
                        <label>123</label>
                        <button className="destroy"></button>
                </div>
            </li>
        );
    }
}

export default ListItem;