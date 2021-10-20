import "./ModalMovie.css";
import queryString from "query-string";
import { useState, useEffect } from "react";

export default function ModalMovie() {
  const [details, setDetails] = useState([]);
  const titleURL = queryString.parse(window.location.search).title;
  const IMG_API = "https://image.tmdb.org/t/p//w1280";
  const [liked, setLiked] = useState('');

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?&api_key=4f14177298fe27d980611469c28c5473&query=" +
        titleURL
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.results[0]);
      });
  }, []);


  const checked = (e) => {
    var type = e.target.checked? "add": "remove";
    e.target.parentElement.classList[type]('checked');

    if (e.target.checked === true) {
            setLiked('added to favourites!')
        setInterval(function () {
            setLiked('')
        }, 3000);
    }
  }

  return (
    <section id="addMovie" className="modal">
      <img src={IMG_API + details.backdrop_path} alt={details.title} />
      <div className="modal-content">
        <div className="movieRating">
          <h1>{titleURL}</h1>
          <p>{details.vote_average}/10</p>
          <p>{details.release_date}</p>
        </div>
        <p>{details.overview}</p>
        <br />
        <input readOnly type="text" value={titleURL} style={{display:'none'}}/>

        <form method="post">
          <label to="favourites" id='favouritesLabel'>
          <span id='liked'>{liked}</span>
            <input
              type="checkbox"
              name="favourites"
              className="heart-shape"
              id="favourites"
              onClick={checked}
            />
          </label>
          <br />
          <label to="ratings">
            {" "}
            Your ratings (/10):
            <input type="number" name="ratings" min="0" max="10" pattern="/d" />
          </label>
          <br />
          <label to="movie_review">
            Your thoughts on "{titleURL}":
            <br />
            <textarea name="movie_review"></textarea>
          </label>
          <br />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </section>
  );
}
