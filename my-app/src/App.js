import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import ShowsContainer from "./ShowsContainer"
import Search from "./Search";
import Header from "./Header"
import MovieForm from "./MovieForm"
import MovieOfTheWeek from "./MovieOfTheWeek"
import React from "react";
import Home from "./Home";


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
<Search onChange={handleChange}/>


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
            <ShowsContainer shows={shows} searchText={searchText}/>
          </Route>
          <Route exact path="/shows/new">
            <MovieForm />
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
