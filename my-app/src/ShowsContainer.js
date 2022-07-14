import React from "react";
import ShowCard from "./ShowCard";

function ShowsContainer({shows, searchText}) {

  const renderShows = shows.map(show => {
    if(show.title.toLowerCase().indexOf(searchText.toLowerCase()) >=0 || show.summary.toLowerCase().indexOf(searchText.toLowerCase()) >=0 || show.genre.toLowerCase().indexOf(searchText.toLowerCase()) >=0){
      return <ShowCard key={show.id} show={show}/>
    }
  })
  return (
    <div className="cards">
    <div className="cards1">
      {renderShows}
    </div>
      <div className="Movie-Gifs">
        <img src="https://c.tenor.com/k70nB4YylS4AAAAC/tripped-ouch.gif" className="Gif" alt="Gif Picture" />
        <img src="https://bestanimations.com/media/basketball/226172115epic-basketball-dunk-animated-gif-2.gif" className="Gif" alt="Gif Picture" />

      </div>
</div>
  );
}

export default ShowsContainer;