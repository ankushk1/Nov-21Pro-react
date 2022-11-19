import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [isEditing, setIsEditing] = useState({
    edit: false,
    todoId: ""
  });

  const onAddHandler = () => {
    if (!input) return;
    // const newObj = {
    //   id: uuidv4().split('-')[0],
    //   text: input
    // }
    // const cloneArr = todoArr
    // cloneArr.push(newObj)
    // setTodoArr(cloneArr)
    setTodoArr([...todoArr, { id: uuidv4().split("-")[0], text: input }]);
    setInput("");
  };

  const onDeleteHandler = (id) => {
    // const todoIndex = todoArr.findIndex(elem => elem.id == id)
    // const cloneArr = [...todoArr]
    // cloneArr.splice(todoIndex, 1,)
    // setTodoArr(cloneArr)
    const updatedArr = todoArr.filter((elem) => elem.id != id);
    setTodoArr(updatedArr);
  };

  const onEditHandler = (id, text) => {
    setIsEditing({ edit: true, todoId: id });
    setInput(text);
  };

  const onUpdateHandler = () => {
    const todoIndex = todoArr.findIndex((elem) => elem.id == isEditing.todoId);
    const updatedArr = [...todoArr];
    updatedArr[todoIndex] = {
      id: isEditing.todoId,
      text: input
    };
    setTodoArr(updatedArr)
    setIsEditing({edit: false, todoId : ""})
    setInput('');
  };

  return (
    <div className="container">
      <div className="fs-4 my-3">Todo App</div>
      <div className=" d-flex justify-content-center">
        <input
          className="form-control w-50"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        {isEditing.edit ? (
          <button
            className="btn btn-warning ms-2"
            onClick={() => onUpdateHandler()}
          >
            Update
          </button>
        ) : (
          <button
            className="btn btn-secondary ms-2"
            onClick={() => onAddHandler()}
          >
            Add Todo
          </button>
        )}
      </div>
      <div className="row mt-3 d-flex justify-content-center ms-5">
        {todoArr.length > 0 &&
          todoArr.map((todo) => (
            <>
              <div className="fs-5 col-5 text-start ms-5">{todo.text}</div>
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
          ))}
      </div>
    </div>
  );
};

export default Todo;
