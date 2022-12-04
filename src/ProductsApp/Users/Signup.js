import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../utils/ApiUtils";
import { useForm } from "../../utils/CustomHooks";
import { error, success } from "../../utils/notificationUtils";

const Signup = () => {
  const { values, onInputChange } = useForm();

  const onSignupHandler = async () => {
    const apiResponse = await signup(values)
    if(apiResponse.status === 200 ){
      success(apiResponse.data.message);
    } else {
     error(apiResponse.data.message)
    }
  }

  return (
    <div>
      <div className="fs-3 ">Signup</div>
      <div className="w-75 d-flex flex-column mx-auto">
        <input
          className="form-control mt-2"
          type="text"
          name="firstname"
          placeholder="First Name"
          value={values.firstname}
          onChange={(e) => onInputChange(e)}
        />
        <input
          className="form-control mt-2"
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={values.lastname}
          onChange={(e) => onInputChange(e)}
        />
        <input
          className="form-control mt-2"
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={(e) => onInputChange(e)}
        />
        <input
          className="form-control mt-2"
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="btn btn-success mt-3" onClick={onSignupHandler}>Signup</div>
      <div className="mt-3">
        Already signed up? <Link to="/signin">Signin</Link> here.
      </div>
    </div>
  );
};

export default Signup;
