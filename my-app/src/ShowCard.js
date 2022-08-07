import {NavLink} from 'react-router-dom'

function ShowCard({show}) {

  const {id, title, poster, genre} = show

  return (
        <div>
          <div>
            <NavLink to={`/shows/${id}`}>
              <img src={poster} className="filmPoster" />
            </NavLink>
          </div>
        </div>
    
  );
}

export default ShowCard;
