import {NavLink} from 'react-router-dom'

function ShowCard({show}) {

  const {id, title, poster, genre} = show

  return (
    <div className='gallery'>
            <img src={poster} className="filmPoster" />
            <div className='desc'>
              <h4>{title}</h4>
              <p>{genre}</p>
              <NavLink to={`/shows/${id}`}>
            <button>Details</button>
            </NavLink>
            </div>
          </div>
  );
}

export default ShowCard;
