import { useState, useEffect } from "react";
import ShowsContainer from "./ShowsContainer"
import Search from "./Search";
import Header from "./Header"
import RandomButton from "./RandomButton"
import MovieForm from "./MovieForm"
import MovieOfTheWeek from "./MovieOfTheWeek"
import React from "react";


function App() {
  const [searchText, setSearchText] = useState("");
  const [shows, setShows] = useState([])

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
      <Header />
      <Search onChange={handleChange}/>
      <RandomButton />
      <ShowsContainer shows={shows} searchText={searchText}/>
      <MovieForm />
      <MovieOfTheWeek />
    </div>
  );
}

export default App;
