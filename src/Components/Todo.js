import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoDetails from "./TodoDetails";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "../actions/counterActions";

const Todo = () => {
  const ALL = "ALL";
  const PENDING = "PENDING";
  const COMPLETED = "COMPLETED";
  const todos = useSelector((state) => {
    // console.log(state);
    return state.todoData.todos
  });
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState(
    //   () => {
    //   const todosFromLC = JSON.parse(localStorage.getItem('todos')) ?? []
    //   return todosFromLC
    // }
    []
  );

  useEffect(() => {
    setTodoArr(todos);
  }, [todos]);

  const [isEditing, setIsEditing] = useState({
    edit: false,
    todoId: ""
  });
  const [filter, setFilter] = useState("ALL");
  const onAddHandler = () => {
    if (!input) return;
    // const newObj = {
    //   id: uuidv4().split('-')[0],
    //   text: input
    // }
    // const cloneArr = todoArr
    // cloneArr.push(newObj)
    // setTodoArr(cloneArr)
    setTodoArr([
      ...todoArr,
      { id: uuidv4().split("-")[0], text: input, completed: false }
    ]);
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
    const elemAtIndex = todoArr[todoIndex];
    const updatedArr = [...todoArr];
    updatedArr[todoIndex] = {
      id: isEditing.todoId,
      text: input,
      completed: elemAtIndex.completed
    };
    setTodoArr(updatedArr);
    setIsEditing({ edit: false, todoId: "" });
    setInput("");
  };

  const onCompleteHandler = (todo) => {
    const todoIndex = todoArr.findIndex((elem) => elem.id == todo.id);
    const updatedArr = [...todoArr];
    updatedArr[todoIndex] = {
      ...todo,
      completed: !todo.completed
    };
    setTodoArr(updatedArr);
  };

  const getAllTodos = () => {
    return (
      todoArr.length > 0 &&
      todoArr.map((todo) => (
        <TodoDetails
          key={todo.id}
          todo={todo}
          onDeleteHandler={onDeleteHandler}
          onEditHandler={onEditHandler}
          onCompleteHandler={onCompleteHandler}
        />
      ))
    );
  };

  const getCompletedTodos = () => {
    return (
      todoArr.length > 0 &&
      todoArr.map(
        (todo) =>
          todo.completed && (
            <TodoDetails
              key={todo.id}
              todo={todo}
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
              onCompleteHandler={onCompleteHandler}
            />
          )
      )
    );
  };

  const getPendingTodos = () => {
    return (
      todoArr.length > 0 &&
      todoArr.map(
        (todo) =>
          !todo.completed && (
            <TodoDetails
              key={todo.id}
              todo={todo}
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
              onCompleteHandler={onCompleteHandler}
            />
          )
      )
    );
  };

  useEffect(() => {
    // localStorage.setItem('todos', JSON.stringify(todoArr))
    dispatch(setTodos(todoArr));
  }, [todoArr]);

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
      <div className="my-3 d-flex justify-content-evenly">
        <button
          onClick={() => setFilter(ALL)}
          className={`${filter === ALL ? "btn-success" : ""} btn`}
        >
          All
        </button>
        <button
          onClick={() => setFilter(COMPLETED)}
          className={`${filter === COMPLETED ? "btn-success" : ""} btn`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter(PENDING)}
          className={`${filter === PENDING ? "btn-success" : ""} btn`}
        >
          Pending
        </button>
      </div>
      <div className="row mt-3 d-flex justify-content-center ms-5">
        {filter === ALL && getAllTodos()}
        {filter === COMPLETED && getCompletedTodos()}
        {filter === PENDING && getPendingTodos()}
      </div>
    </div>
  );
};

export default Todo;
