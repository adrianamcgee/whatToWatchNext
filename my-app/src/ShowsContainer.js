import React from "react";
import ShowCard from "./ShowCard";

function ShowsContainer({shows, searchText}) {
  const renderShows = shows.map(show => {
    if(show.title.toLowerCase().indexOf(searchText.toLowerCase()) >=0 || show.summary.toLowerCase().indexOf(searchText.toLowerCase()) >=0 || show.genre.toLowerCase().indexOf(searchText.toLowerCase()) >=0){
      return <ShowCard key={show.id} show={show} />
    }
  })
  return (
    <div className="container">
        {renderShows}
    </div>
  );
}

export default ShowsContainer;


function filmPosters({shows}){
  const showsPosters = shows.map(show => {
    return show.img;
  });
}