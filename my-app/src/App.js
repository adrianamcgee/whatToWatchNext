import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ShowsContainer from "./ShowsContainer"
import Search from "./Search";
import Header from "./Header"
import MovieForm from "./MovieForm"
import MovieOfTheWeek from "./MovieOfTheWeek"
import React from "react";


function App() {
  const [shows, setShows] = useState([])
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetch ("http://localhost:3000/Shows")
    .then (res => res.json())
    .then (showData => setShows(showData))
  }, [])

  // function onAddWatch(newWatch){
  //    return setShows([...shows, newWatch]);
  // };

  function handleChange(newText){
    setSearchText(newText);
  }

  return (
    <div className="container">
      {/* <Header /> */}
      <Search onChange={handleChange}/>
      {/* <RandomButton /> */}
      <ShowsContainer shows={shows} searchText={searchText}/>
      {/* <MovieForm />
      <MovieOfTheWeek /> */}
    </div>
  );
}

export default App;
