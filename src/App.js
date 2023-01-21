import React from "react";
import "./App.css";
import useGetData from "./hooks/useGetData";
import Accordions from "./components/accordion/accordion";

function App() {
  const data = useGetData();
  return (
    <div className="app">
      {data && data.map((celebrity) => <Accordions key={celebrity.id} celebrity={celebrity} />)}
    </div>
  );
}

export default App;
