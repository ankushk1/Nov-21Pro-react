import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./ProductsApp/Users/Signin";
import Signup from "./ProductsApp/Users/Signup";
import { ToastContainer, toast } from "react-toastify";
import ProductsList from "./ProductsApp/Products/ProductsList";
import ProductView from "./ProductsApp/Products/ProductView";
import ProductCreate from "./ProductsApp/Products/ProductCreate";
import { CustomRoutes } from "./CustomRoutes";
const RouterComp = () => {
  return (
    <div className="text-center">
      {/* <Navbar /> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/products"
          element={
            <CustomRoutes>
              <ProductsList />
            </CustomRoutes>
          }
        />
        <Route
          path="/product"
          element={
            <CustomRoutes>
              <ProductView />
            </CustomRoutes>
          }
        />
        <Route
          path="/product-create"
          element={
            <CustomRoutes>
              <ProductCreate />
            </CustomRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default RouterComp;
