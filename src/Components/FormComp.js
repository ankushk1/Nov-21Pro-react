import React, { useState } from "react";

const FormComp = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    qualification: "",
    isPass : false
  });

  const onInputChange = (event) => {
    console.log(event.target.name)
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <h4>FirstName - {userInfo.firstName}</h4>
        <h4>LastName - {userInfo.lastName}</h4>
        <h4>Email - {userInfo.email}</h4>
        <h4>password - {userInfo.password}</h4>
      </div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={userInfo.firstName}
          name="firstName"
          onChange={(event) => onInputChange(event)}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={userInfo.lastName}
          name="lastName"
          onChange={(event) => onInputChange(event)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={userInfo.email}
          name="email"
          onChange={(event) => onInputChange(event)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={userInfo.password}
          name="password"
          onChange={(event) => onInputChange(event)}
        />
        <br />
        <select onChange={(event) => onInputChange(event)} name="qualification">
          <option value="none">None</option>
          <option value="B.tech">B.tech</option>
          <option value="BBA">BBA</option>
          <option value="MBBS">MBBS</option>
        </select>
      </form>
    </div>
  );
};

export default FormComp;
