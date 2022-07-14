import React from "react";
import ShowCard from "./ShowCard";

const cars = [];
function ShowsContainer({shows, searchText}) {

  const renderShows = shows.map(show => {
    if(show.title.toLowerCase().indexOf(searchText.toLowerCase()) >=0 || show.summary.toLowerCase().indexOf(searchText.toLowerCase()) >=0 || show.genre.toLowerCase().indexOf(searchText.toLowerCase()) >=0){
        cars.push(show.poster)
      return <ShowCard key={show.id} show={show} cars={cars}/>
    }
  })
  console.log(cars);
  return (
    <div className="container">
        {renderShows}
    </div>
  );
}

export default ShowsContainer;