import React from "react";
import "./components.css";
const ItemDetails = ({ name, email, phone, disablePhone }) => {
  console.log(phone)
  return (
    <div className="user-info text-dark bg-secondary">
      <div >
        <div>{name}</div>
        <div>{email}</div>
        {!disablePhone && <div>{phone}</div>}
      </div>
    </div>
  );
};

export default ItemDetails;
