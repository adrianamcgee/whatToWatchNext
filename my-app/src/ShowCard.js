import {NavLink} from 'react-router-dom'

function ShowCard({show, cars}) {

  const {id, title, poster, genre} = show

  function onClick(event){
    onchange(event.target.value)  
  }
  function renderPostersInSlide(cars){
      for(let i=0; i<cars.length; i++) {
        return cars[i];
    }
  }

  return (
    <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <NavLink to={`/shows/${id}`}>
              <img src={cars} className="filmPoster" onchange={onClick}/>
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
