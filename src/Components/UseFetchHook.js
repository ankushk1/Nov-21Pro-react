import React from "react";
import { useState } from "react";
import { useFetch } from "../utils/CustomHooks";

const UseFetchHook = () => {
  const [type, setType] = useState("posts");

  const { data } = useFetch("https://jsonplaceholder.typicode.com", type);
  console.log(data);

  return (
    <div>
      <div>
        <button
          onClick={() => setType("posts")}
        >
          Posts
        </button>
        <button
          onClick={() => setType("todos")}
        >
          Todos
        </button>
        <button
          onClick={() =>
            setType("comments")
          }
        >
          Comments
        </button>
      </div>
      {data.map((elem, index) => (
        <div key={index}>
          <pre>{elem.id}</pre>
          <pre>{elem?.email ?? "Not Found"}</pre>
          <pre>{elem.title ?? elem.body}</pre>
        </div>
      ))}

      
    </div>
  );
};

export default UseFetchHook;
