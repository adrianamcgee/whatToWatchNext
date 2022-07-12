
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
            <p>{show.runtime}</p>
            <p>
              {
                //planeteer.fromUSA ? "USA-based" : "Working overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ShowCard;
