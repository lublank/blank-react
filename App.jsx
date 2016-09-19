import React from 'react';
import Header from './components/todo-header.jsx';

class App extends React.Component {
    render() {
        return (
            <section id="todo_app">
                <div>
                    <Header />
                </div>
            </section>
        );
    }
}

export default App;