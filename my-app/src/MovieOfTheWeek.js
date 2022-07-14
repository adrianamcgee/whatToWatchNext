import { useState} from "react";
import React from "react";
import ShowCard from "./ShowCard";
import { NavLink } from "react-router-dom";



function MovieOfTheWeek(){
    const [movOfWeek, setMovOfWeek] = useState({});
        fetch("http://localhost:3000/Shows/24")
        .then(res => res.json())
        .then(movOfWeekData => setMovOfWeek(movOfWeekData)) 
    
    return (
        <div className="swiper">
            <NavLink to={`/shows/${movOfWeek.id}`}>
              <img src={movOfWeek.poster} className="swiper-img" />
            </NavLink>
</div>
      );
}



export default MovieOfTheWeek;