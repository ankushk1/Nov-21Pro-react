import axios from "axios";

const baseUrl = "http://localhost:8000";

export const signup = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/user/signup`,
      data: data
    });
    return response;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const signin = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/user/signin`,
      data: data
    });
    return response;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios({
      method:"GET",
      url: `${baseUrl}/product/getProducts`
    });

    return response
  } catch (err) {
    console.log(err);
    return err.response;
  }
};


export const deleteProduct = async (id) => {
  try {
    const response = await axios({
      method:"Delete",
      url: `${baseUrl}/product/deleteProduct/${id}`,
      headers:{
        "access-token": localStorage.getItem("token")
      }
    });

    return response
  } catch (err) {
    console.log(err);
    return err.response;
  }
}

export const getCategories = async  () => {
  try {
    const response = await axios({
      method:"GET",
      url: `${baseUrl}/category/getCategories/`,
      headers:{
        "access-token": localStorage.getItem("token")
      }
    });

    return response
  } catch (err) {
    console.log(err);
    return err.response;
  }
}


export const createProduct = async (values) => {
  try {
    const response = await axios({
      method:"Post",
      url: `${baseUrl}/product/createProduct`,
      headers:{
        "access-token": localStorage.getItem("token")
      },
      data:values
    });

    return response
  } catch (err) {
    console.log(err);
    return err.response;
  }
}

export const updateProduct = async(values, id) => {
  try {
    const response = await axios({
      method:"Put",
      url: `${baseUrl}/product/updateProduct/${id}`,
      headers:{
        "access-token": localStorage.getItem("token")
      },
      data:values
    });

    return response
  } catch (err) {
    console.log(err);
    return err.response;
  }
}