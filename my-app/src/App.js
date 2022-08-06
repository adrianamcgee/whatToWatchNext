import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import ShowsContainer from "./ShowsContainer"
import Search from "./Search";
import Header from "./Header"
import MovieForm from "./MovieForm"
import React from "react";
import Home from "./Home";
import FilmDetails from "./FilmDetails";
import EditBttn from "./EditBttn";
import UserForm from "./UserForm";


function App() {
  const [shows, setShows] = useState([])
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState([]);


  useEffect(() => {
    fetch ("http://localhost:9292/Shows")
    .then (res => res.json())
    .then (showData => setShows(showData))
  }, [])

  useEffect(() => {
    fetch ("http://localhost:9292/Users")
    .then (res => res.json())
    .then (userData => setUser(userData))
  }, [])

  function handleChange(newText){
    setSearchText(newText);
  };

  function onAddMovie(newMovie){
    return setShows([...shows, newMovie]);
  };

  function onAddUser(newUser){
   return setUser([...user, newUser]);
 };

  //function for editing movie
  const handleEditShow = (editedShow) => {
    const updatedShowsArray = shows.map((oldShow) => {
      if (oldShow.id === editedShow.id){
        return editedShow;
      } else {
        return oldShow;
      }
    })
    setShows(updatedShowsArray);
  }

  //delete function for DELETE BUTTON
  function handleDeleteShows(deletedID) {
    // console.log(deletedID)
    const updatedShows = shows.filter(
      (show) => shows.id !== deletedID
      
    );
    setShows(updatedShows)
  }


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
            <FilmDetails onClick={handleDeleteShows}/>
          </Route>
          <Route exact path="/shows/:id/edit">
          <EditBttn handleEditShow={handleEditShow} />
        </Route>
        <Route exact path="/users">
          <UserForm setUser={setUser} onAddUser={onAddUser} />
        </Route>
      </Switch>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
