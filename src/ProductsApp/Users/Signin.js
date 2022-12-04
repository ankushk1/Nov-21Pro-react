import React from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../../utils/ApiUtils";
import { useForm } from "../../utils/CustomHooks";
import { error, success } from "../../utils/notificationUtils";

const Signin = () => {
  const { values, onInputChange } = useForm();  

  const navigate = useNavigate();


  const onSigninHandler = async () => {
    const apiResponse = await signin(values);
    if (apiResponse.status === 200) {
      const { token, userId, userRole } = apiResponse.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify({ userId, userRole }));
      success(apiResponse.data.message);
      navigate('/products')
    } else {
      error(apiResponse.data.message);
    }
  };

  return (
    <div>
      <div className="fs-3 ">Signin</div>
      <div className="w-75 d-flex flex-column mx-auto">
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
      <div className="btn btn-info mt-3" onClick={onSigninHandler}>
        SignIn
      </div>
    </div>
  );
};

export default Signin;
