import React from "react";
import { useForm } from "../utils/CustomHooks";
const UseForm = () => {
  const { values, onInputChange, onSubmit } = useForm();

  return (
    <div>
      <h1> Form 1</h1>

      <form>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          placeholder={"first name"}
          onChange={(event) => {
            onInputChange(event)
          }}
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          placeholder={"last name"}
          onChange={(event) => onInputChange(event)}
        />
      </form>
      <button onClick={onSubmit}>
          Submit
      </button>
    </div>
  );
};

export default UseForm;
