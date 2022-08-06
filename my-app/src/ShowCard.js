import {NavLink} from 'react-router-dom'

//favorite button on line 18

function ShowCard({show}) {

  const {id, title, poster, genre} = show
  



  return (
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <NavLink to={`/shows/${id}`}>
              <img src={poster} className="filmPoster" />
              
            </NavLink>
            
          </div>
        </div>
    
  );
}

export default ShowCard;
