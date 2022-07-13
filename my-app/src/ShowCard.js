import {NavLink} from 'react-router-dom'

function ShowCard({show}) {

  const {id, title, poster, genre} = show

  function onClick(event){
    onchange(event.target.value)
     
  }

  return (
    <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <NavLink to={`/shows/${id}`}>
              <img src={poster} className="filmPoster" onchange={onClick}/>
            </NavLink>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
    </div>
    
  );
}

export default ShowCard;
