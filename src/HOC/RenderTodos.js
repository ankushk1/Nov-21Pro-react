import React from "react";
import withApiCall from "./withApiCall";

const RenderTodos = (props) => {
  console.log(props);
  return (
    <div>
      RenderTodos
      <div>
        {props?.data.slice(0, 10).map((todo) => (
          <div>
            <pre>{todo.id}</pre>
            <pre>{todo.title}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withApiCall(RenderTodos, "todos");
