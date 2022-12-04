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
