import { useEffect } from "react";
import { useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState({});

  const onInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    console.log("Submit");
  };

  return {
    values,
    onInputChange,
    onSubmit
  };
};

export const useFetch = (url, type) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${url}/${type}`);
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return { data };
};
