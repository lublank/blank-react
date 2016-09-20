//todo头部组件
import React from 'react';
import TodoAction from '../actions/action';
let propsTypes = React.PropTypes;
let ENTER_KEY_CODE = 13;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * 判断输入回车则保存数据
     * @param e
     * @private
     */
    _onKeyDown(e) {
        if (e.keyCode === ENTER_KEY_CODE) {
            let node = this.refs.input;
            let text = node.value.trim();
            console.log(text);
            this.props.onAddTodo(text);
            node.value = '';
        }
    }

    render() {
        return (
            <header id="header">
                <h1>todos</h1>
                <input type="text"
                       ref="input"
                       id="new_todo"
                       placeholder="What needs to be done?"
                       onKeyDown={ e => this._onKeyDown(e)}
                       autoFocus={true}
                />
            </header>
        );
    }
}
//输入验证
Header.propTypes = {
    onAddTodo: propsTypes.func.isRequired
};
export default Header;