import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./ProductsApp/Users/Signin";
import Signup from "./ProductsApp/Users/Signup";
import { ToastContainer, toast } from 'react-toastify';
import ProductsList from "./ProductsApp/Products/ProductsList";
const RouterComp = () => {
  return (
    <div className="text-center">
      {/* <Navbar /> */}
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/products" element={<ProductsList/>} />
      </Routes>
    </div>
  );
};

export default RouterComp;
