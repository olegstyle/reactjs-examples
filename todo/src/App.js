import React from 'react';
import {TodoItem} from "./components/TodoItem";
import {Input} from "./components/Input";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "Hello", todo: []};
    }

    update(e) {
        this.setState({text: e.target.value});
    }

    handleClick() {
        const text = this.state.text;
        if (text.length > 0) {
            this.setState(
                {
                    todo: this.state.todo.concat({
                        id: this.state.todo.length + 1,
                        text: this.state.text,
                        highlight: false
                    }), text: ""
                }
            );
        } else {
            alert("Please enter something");
        }
    }

    removeTodo(id) {
        let todos = this.state.todo;

        for (let i = 0; i < todos.length; i++) {
            let todo = todos[i];
            if (todo.id === id) {
                todos.splice(i, 1);
            }
        }

        this.setState({todo: todos});
    }

    changeHighlight(id) {
        let todos = this.state.todo;

        for (let i = 0; i < todos.length; i++) {
            let todo = todos[i];
            if (todo.id === id) {
                todos[i].highlight = !todos[i].highlight;
            }
        }

        this.setState({
            todo: todos
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-md-offset-4">
                        <div className="wrapper">
                            <h1>Todo List</h1>

                            <Input
                                value={this.state.text}
                                update={this.update.bind(this)}
                                handleClick={this.handleClick.bind(this)}
                            />
                            <TodoItem
                                removeTodo={this.removeTodo.bind(this)}
                                todo={this.state.todo}
                                changeHighlight={this.changeHighlight.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
