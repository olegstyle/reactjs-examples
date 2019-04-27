import * as React from "react";

export class Input extends React.Component {
    render() {
        return (
            <div className="form-group d-flex">
                <input
                    className="form-control flex-grow-1"
                    value={this.props.value}
                    onChange={this.props.update}
                    type="text"
                    placeholder="Please enter a text"
                />
                <button className="btn btn-info" onClick={this.props.handleClick}>
                    Add
                </button>
            </div>
        );
    }
}
