import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../../utils/ApiUtils";
import { error, success } from "../../utils/notificationUtils";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const apiResponse = await getProducts();
      if (apiResponse.status === 200) {
        success(apiResponse.data.message);
        setProducts(apiResponse.data.productsData);
      } else {
        error(apiResponse.data.message);
      }
    })();
  }, []);

  return (
    <div>
      <div className="fs-2">ProductsList</div>
    </div>
  );
};

export default ProductsList;
