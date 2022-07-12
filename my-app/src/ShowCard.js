
function ShowCard({show}) {

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={show.poster}
          alt={"RENDER PERSON NAME"}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{show.title}</div>
          <p className="card__text">{show.summary}</p>
          <div className="card__detail">
            <p>{show.genre}</p>
            <p>
              {show.runtime}
            </p>
            <p>{show.releaseYear}</p>
            <iframe height="480" width="500" src={show.trailer}>
            </iframe>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ShowCard;
