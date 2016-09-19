import React from 'react';
import Header from './components/todo-header.jsx';
import Main from './components/todo-main.jsx';
import Footer from './components/todo-footer.jsx';

class App extends React.Component {
    render() {
        return (
            <section id="todo_app">
                <Header />
                <Main />
                <Footer />
            </section>
        );
    }
}

export default App;