import React from "react";

const TodoDetails = ({ todo, onEditHandler, onDeleteHandler, onCompleteHandler }) => {
  return (
    <>
      <div className="fs-5 col-5 text-start ms-5">
        <span className="me-3" onClick={()=> onCompleteHandler(todo)}>
          {todo.completed ? (
            <i className="fa-solid fa-square-check fa-sm"></i>
          ) : (
            <i className="fa-solid fa-stopwatch fa-sm"></i>
          )}
        </span>
        <span 
          className={`${todo.completed ? "text-decoration-line-through" : ""}`}
        >{todo.text}</span>
      </div>
      <div className="col me-5 mb-2">
        <button
          className="btn btn-info me-3 btn-sm"
          onClick={() => onEditHandler(todo.id, todo.text)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteHandler(todo.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoDetails;
