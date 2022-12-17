import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createProduct, getCategories, updateProduct } from "../../utils/ApiUtils";
import { useForm } from "../../utils/CustomHooks";
import { error, success } from "../../utils/notificationUtils";

const ProductCreate = () => {
  const [categories, setCategories] = useState([]);
  const { values, onInputChange, setValues } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const productData = location.state;

  const fetchCategories = async () => {
    const apiResponse = await getCategories();
    if (apiResponse.status === 200) {
      setCategories(apiResponse.data.categories);
    } else {
      error(apiResponse.data.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if(location.state){
      const currObj = {...values}
      currObj.name = productData.name
      currObj.description = productData.description
      currObj.price = productData.price
      currObj.quantity = productData.quantity
      currObj.category = productData.category._id
      setValues(currObj)
    }
  }, [location.state])

  const onHandleCreate = async () => {
    const apiResponse = await createProduct(values);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      navigate("/products");
    } else {
      error(apiResponse.data.message);
    }
  };

  const onHandleUpdate = async () => {
    const apiResponse = await updateProduct(values, productData._id);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      navigate("/products");
    } else {
      error(apiResponse.data.message);
    }
  }

  return (
    <div>
      <div className="fs-2 mb-3">
        {productData ? "Update Product" : "Create Product"}
        <div className="w-50 m-auto my-4">
          <input
            className="form-control mt-2"
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={(e) => onInputChange(e)}
          />
          <input
            className="form-control mt-2"
            type="text"
            name="description"
            placeholder="description"
            value={values.description}
            onChange={(e) => onInputChange(e)}
          />
          <input
            className="form-control mt-2"
            type="text"
            name="price"
            placeholder="price"
            value={values.price}
            onChange={(e) => onInputChange(e)}
          />
          <input
            className="form-control mt-2"
            type="text"
            name="quantity"
            placeholder="quantity"
            value={values.quantity}
            onChange={(e) => onInputChange(e)}
          />
          <select
            value={values.category}
            name="category"
            className="form-select  my-3"
            onChange={(e) => onInputChange(e)}
          >
            <option value="">None</option>
            {categories.map((cat) => (
              <option value={cat._id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div>
          {productData ? (
            <div className="btn btn-warning" onClick={() => onHandleUpdate()}>
              Update
            </div>
          ) : (
            <div className="btn btn-success" onClick={() => onHandleCreate()}>
              Create
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
