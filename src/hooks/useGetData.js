import { useState, useEffect } from "react";

const useGetData = () => {
  const url = "./celebrities.json";
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);

  return data;
};

export default useGetData;
