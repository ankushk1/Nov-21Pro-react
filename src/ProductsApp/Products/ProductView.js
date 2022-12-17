import React from "react";
import { useLocation } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductView = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="fs-2 ">
      ProductView
      <div className="d-flex justify-content-center">
        <ProductDetails product={location.state} style={{width:"18rem", height:"15rem"}} isFromView={true} />
      </div>
    </div>
  );
};

export default ProductView;
