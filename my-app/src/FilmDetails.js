import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function FilmDetails() {

    
    const [show, setShow] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    
    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:3000/Shows/${id}`)
        .then((r) => r.json())
        .then((show) => {
          setShow(show);
          setIsLoaded(true)
        });
    }, [id]);
  
    if (!isLoaded) return <h2>Loading...</h2>

    const { title, poster, summary, releaseYear, genre, runtime, trailer  } = show

    return(
        <li className="cards__item">
        <div className="card">
          <img
            src={poster}
            alt={"Broken Image"}
            className="filmPoster"
          />
          <div className="card__content">
            <div className="card__title">{title}</div>
            <p className="card__text">{summary}</p>
            <div className="card__detail">
            <div className='desc'>
              <h4>{title}</h4>
              <p>{genre}</p>
            
            </div>
              <p>{genre}</p>
              <p>
                {runtime}
              </p>
              <p>{releaseYear}</p>
              <iframe height="480" width="500" src={trailer}>
              </iframe>
            </div>
          </div>
        </div>
      </li>
    );
}

export default FilmDetails;

