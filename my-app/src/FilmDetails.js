import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import EditBttn from "./EditBttn";
import { NavLink } from "react-router-dom"

function FilmDetails({ handleDeleteShows, handleEditShows }) {
// console.log(handleDeleteShows)
    
    const [show, setShow] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [showForm, setShowForm] = useState(false)
    
    const { id } = useParams();

    // function testForm (){
    //   showForm ? console.log('true') : console.log('this')    
    // } 


    useEffect(() => {
      fetch(`http://localhost:9292/shows/${id}`)
        .then((r) => r.json())
        .then((show) => {
          setShow(show);
          setIsLoaded(true)
        });
    }, [id]);
    function handleShow () {
      setShowForm((showForm) => !showForm) 
      
    }

    if (!isLoaded) return <h2>Loading...</h2>

    const { title, poster, summary, releaseYear, genre, runtime, trailer, } = show
    
    return(
        <li className="cards__item">
        <div className="card">
        { showForm? <EditBttn /> : null }
          <img
            src={poster}
            alt={"Broken Image"}
            className="swiper-img"
          />
          <div className="card__content">
            <div className="card__title">{title}</div>
            <p className="card__text">{summary}</p>
            <div className="card__detail">
            <div className='desc'>
              <h4>{title}</h4>
              <button onClick={() => handleDeleteShows(show.id)}>DELETE</button>
              <button onClick={handleShow}>New Edit Button</button>
            {/* <button onClick={ () => handleEditShows(show)}> EDIT </button> */}
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

