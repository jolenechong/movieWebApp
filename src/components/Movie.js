import "./Movie.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeholder from '../images/no_image_to_show_.jpg'
// import * as qs from 'query-string'


const IMG_API = "https://image.tmdb.org/t/p//w1280";
const GENRE_API = "https://api.themoviedb.org/3/movie/";
const GENRE_API2 = "?api_key=4f14177298fe27d980611469c28c5473&language=en-US";

const Movie = ({
  title,
  poster_path,
  backdrop_path,
  overview,
  vote_average,
  genre_ids,
  id,
}) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(GENRE_API + id + GENRE_API2)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);

  const getIMG = IMG_API + backdrop_path

  return (
      <>
    <div className="movie-wrapper">
    <Link to={`/movie?title=${title}`} id="no-change-link">
    <div className="movie">
        {backdrop_path ? <img src={getIMG} alt={title}/> : <img src={placeholder} alt='' style={{height:'174px'}}/>}
        <div className="movie-info">
          <h1>{title}</h1>
          {genres.map((e) => (
            <span className="genres">{e.name + " "}</span>
          ))}
          <p style={{ position: "absolute", top: "10px", right: "20px",fontSize:"0.8rem",background:"var(--accent-color)",borderRadius:"20px",padding:"5px" }}>
            {vote_average}
          </p>
          
        </div>
        <div className="movie-details">
        <p className="text-wrap">{overview}</p>
        </div>
      </div>            
            
      </Link>
      
    </div>
    </>
  );
};

export default Movie;
