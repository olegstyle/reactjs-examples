import * as React from "react";

export class TodoItem extends React.Component {
    changeHighlight(id) {
        this.props.changeHighlight(id);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        const listItems = this.props.todo.map((todo, index) =>
            <li className="todoItem mb-1" key={todo.id}>
                <span
                    onClick={this.removeTodo.bind(this, todo.id)}
                    className="btn btn-danger btn-sm mr-1 removeTodo">
                    <i className="fa fa-trash" />
                </span>
                <span onClick={this.changeHighlight.bind(this, todo.id)}
                      className={`btn btn-sm checkTodo mr-1 ${todo.highlight ? 'btn-warning' : 'btn-success'}`}>
                    <i className={`fa color-white ${todo.highlight ? 'fa-window-close' : 'fa-check-circle'}`} />
                </span>
                <span className={`btn btn-default btn-sm ${todo.highlight ? 'text-highlight' : ''}`} style={{fontSize: '18px'}}>
                    {todo.text}
                </span>
            </li>
        , this);

        return <ul className="todos">{listItems}</ul>;
    }
}
