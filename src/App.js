import React, { useEffect, useState } from "react";
import "./App.css";
import useGetData from "./hooks/useGetData";
import Accordions from "./components/accordion/accordion";

function App() {
  const data = useGetData();
  const [celebrityData, setCelebrityData] = useState();

  useEffect(() => {
    setCelebrityData(data);
  }, [data]);

  const remove = (id) => {
    const newCelebrityData = celebrityData.filter(
      (celebrity) => celebrity.id !== id
    );
    setCelebrityData(newCelebrityData);
  };

  return (
    <div className="app">
      {celebrityData &&
        celebrityData.map((celebrity) => (
          <Accordions
            key={celebrity.id}
            celebrity={celebrity}
            remove={remove}
          />
        ))}
    </div>
  );
}

export default App;
