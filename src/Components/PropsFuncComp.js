import React, { useState } from "react";
import ItemDetails from "./ItemDetails";
import usersData from "./users.json";
import "./components.css";
import ComponentA from "./ComponentA";

const PropsFuncComp = (props) => {
  const [number, setNumber] = useState(1);
  //1. To use props. everytime to access value
  //2. To destructure the data from props
  //3. To destructure directly in parameters
  console.log(number);

  return (
    <div>
      {/* {usersData.map((user, index) => 
        <ItemDetails key={index} name={user.name} email={user.email} phone={user.phone} />
      )} */}
      <ComponentA num={number} setNumber ={setNumber} />
    </div>
  );
};

export default PropsFuncComp;
