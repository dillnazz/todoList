import React from "react";

const TodoListItem = (props) => {
  const { id, title, important, completed } = props;

  const styleSpan = {
    color: important ? "blue" : "black",
    fontWeight: important ? "bold" : "normal",
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <span className="d-flex justify-content-between align-items-center">
      <span
        style={styleSpan}
        onClick={() => props.onComplete(id)}
        className="flex-fill"
      >
        {title}
      </span>
      <button
        onClick={() => props.onDelete(id)}
        className="btn btn-outline-danger"
      >
        <i className="bi bi-trash"></i>
      </button>
      <button
        onClick={() => props.onImporant(id)}
        className="btn btn-outline-warning"
      >
        <i className="bi bi-exclamation-circle-fill"></i>
      </button>
    </span>
  );
};

export default TodoListItem;


//  SHIFT + ALT + F