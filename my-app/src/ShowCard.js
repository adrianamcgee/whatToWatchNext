import {NavLink} from 'react-router-dom'

function ShowCard({show}) {

  const {id, title, poster, genre} = show

  return (
    <div className="swiper">
        <div className="swiper-wrapper">
          <li className="swiper-slide">
            <NavLink to={`/shows/${id}`}>
              <img src={poster} className="filmPoster" />
            </NavLink>
          </li>
        </div>
    </div>
    
  );
}

export default ShowCard;
