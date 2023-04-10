import React, { Component } from "react";

export default class TodoAdd extends Component {
  state = {
    text: "",
  };
  
  setText = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className="d-flex">
        <input
          value={this.state.text}
          className="form-control"
          placeholder="Type new todo"
          onChange={this.setText}
        />
        <button
          onClick={() => {
            if (this.state.text.trim()) {
              this.props.onAddTodo(this.state.text);
              this.setState({ text: "" });
            }
          }}
          className="btn btn-info"
        >
          Add
        </button>
      </div>
    );
  }
}
