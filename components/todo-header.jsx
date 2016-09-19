//todo头部组件
import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header id="header">
                <h1>todos</h1>
                <input type="text" id="new_todo" placeholder="What needs to be done?" autofocus="autofocus"/>
            </header>
        );
    }
}

export default Header;