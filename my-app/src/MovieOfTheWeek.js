import { useState} from "react";
import React from "react";
import ShowCard from "./ShowCard";


function MovieOfTheWeek(){
    const [movOfWeek, setMovOfWeek] = useState({});
        fetch("http://localhost:3000/Shows/24")
        .then(res => res.json())
        .then(movOfWeekData => setMovOfWeek(movOfWeekData)) 
    
    return (
        <ShowCard key={movOfWeek.id} show={movOfWeek} />
      );
}



export default MovieOfTheWeek;