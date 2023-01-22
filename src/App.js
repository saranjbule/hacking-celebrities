import React, { useEffect, useState } from "react";
import useGetData from "./hooks/useGetData";
import Accordions from "./components/accordion/accordion";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

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

  const update = (id, content) => {
    const updatedCelebrity = (celebrity) => {
      if (celebrity.id === id) {
        return { ...celebrity, ...content };
      }
      return celebrity;
    };
    const currCelebrity = celebrityData.map(updatedCelebrity);
    setCelebrityData(currCelebrity);
  };

  return (
    <div className="app">
      <FormControl className="search">
        <OutlinedInput
          placeholder="Search User"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      {celebrityData &&
        celebrityData.map((celebrity) => (
          <Accordions
            key={celebrity.id}
            celebrity={celebrity}
            remove={remove}
            update={update}
          />
        ))}
    </div>
  );
}

export default App;
