import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../utils/ApiUtils";
import { error, success } from "../../utils/notificationUtils";

const ProductDetails = ({ product, style, isFromView }) => {
  const navigate = useNavigate();
  const userRole = JSON.parse(localStorage.getItem("userData")).userRole;

  const onHandleView = (product) => {
    navigate("/product", {
      state: product
    });
  };

  const onDeleteHandler = async (id) => {
    const apiResponse = await deleteProduct(id);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
    } else {
      error(apiResponse.data.message);
    }
  };

  const onUpdateHandler = () => {
    navigate("/product-create", {
      state: product
    });
  };

  return (
    <div>
      <div
        className="card mt-3 border border-dark me-4"
        style={{ width: style?.width ?? "12rem", height: style?.height ?? "" }}
      >
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">₹ {product.price}</h6>
          <p className="card-text fs-4">{product.description}</p>
          {isFromView ? null : (
            <div
              className="card-link btn btn-info mt-3"
              onClick={() => onHandleView(product)}
            >
              View
            </div>
          )}
          <p className="card-text fs-6 mt-2">{product.category.name}</p>
        </div>
      </div>
      {isFromView && userRole === "admin" && (
        <div className="mt-3">
          <button
            className="btn btn-warning me-3"
            onClick={() => onUpdateHandler()}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteHandler(product._id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
