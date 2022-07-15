import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import ShowsContainer from "./ShowsContainer"
import Search from "./Search";
import Header from "./Header"
import MovieForm from "./MovieForm"
import MovieOfTheWeek from "./MovieOfTheWeek"
import React from "react";
import Home from "./Home";
import FilmDetails from "./FilmDetails";


function App() {
  const [shows, setShows] = useState([])
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetch ("http://localhost:3000/Shows")
    .then (res => res.json())
    .then (showData => setShows(showData))
  }, [])

  function handleChange(newText){
    setSearchText(newText);
  };

  function onAddMovie(newMovie){
    return setShows([...shows, newMovie]);
  };


  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route>
         <Header />
         <Switch>
          <Route exact path="/shows">
            <Search onChange={handleChange}/>
            <ShowsContainer shows={shows} searchText={searchText} setSearchText={setSearchText}/>
          </Route>
          <Route exact path="/shows/new">
            <MovieForm setShows={setShows} onAddMovie={onAddMovie}/>
          </Route>
          <Route exact path="/shows/:id">
            <FilmDetails />
          </Route>
          <Route exact path="/weeksmovie">
            <MovieOfTheWeek />
          </Route>
      </Switch>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
