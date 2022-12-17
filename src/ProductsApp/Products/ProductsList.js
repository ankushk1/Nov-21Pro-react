import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../utils/ApiUtils";
import { error, success } from "../../utils/notificationUtils";
import ProductDetails from "./ProductDetails";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const userRole = JSON.parse(localStorage.getItem("userData")).userRole;

  useEffect(() => {
    (async () => {
      const apiResponse = await getProducts();
      if (apiResponse.status === 200) {
        // success(apiResponse.data.message);
        setProducts(apiResponse.data.productsData);
        setOriginalProducts(apiResponse.data.productsData);
      } else {
        error(apiResponse.data.message);
      }
    })();
  }, []);

  const onSignOut = () => {
    localStorage.clear();
    navigate("/product-create");
  };

  useEffect(() => {
    const filteredData = originalProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.name.toLowerCase().includes(search.toLowerCase()) ||
        product.price.includes(search)
      );
    });
    setProducts(filteredData);
  }, [search]);

  return (
    <div>
      <div className=" container">
        <div className="row d-flex ">
          <div className="col-4"></div>
          <div className="col-5 fs-2">ProductsList</div>
          <div className="col-3 ">
            {userRole === "admin" && (
              <button
                className="btn btn-success mt-2"
                onClick={() => navigate("/product-create")}
              >
                Create
              </button>
            )}
            <button
              className="btn btn-danger mt-2 ms-2"
              onClick={() => onSignOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
        <div>
          <div className="input-group w-25 my-2">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-start flex-wrap">
          {products.map((product) => (
            <ProductDetails
              product={product}
              style={{ width: "18rem", height: "15rem" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
