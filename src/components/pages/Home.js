import { useState, useEffect } from "react";
import "../../App.css";
import Movie from "../Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4f14177298fe27d980611469c28c5473";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=4f14177298fe27d980611469c28c5473&query=";
const SEARCH_BY_GENRE_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=4f14177298fe27d980611469c28c5473&with_genres=";
var CHOSEN_API = ''

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByGenre, setSearchByGenre] = useState("");
  const [page, setPage] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
    // need to add async await here
      .then((res) => res.json())
      .then((data) => {
        CHOSEN_API = FEATURED_API
        setMovies(data.results);
        setPage(data.page);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          setPage(data.page);
        });

      CHOSEN_API = SEARCH_API + searchTerm

      setSearchTerm("");
      // document.getElementById("headerTxt").innerHTML = "Results";
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchGenre = (e) => {
    var value = document.querySelector('input[name="genre"]:checked').value;
    console.log(value);
    
    fetch(SEARCH_BY_GENRE_API + value)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
      setPage(data.page);
      console.log(data.results)
    });

    CHOSEN_API = SEARCH_BY_GENRE_API + value
    console.log(CHOSEN_API)
    setSearchByGenre("");
    // console.log('switch');
    // document.getElementById("headerTxt").innerHTML = "Results";
  };

  // pagination, only increments for featured shows
  const pageIncrement = (e) => {
    var pageIncrement = page + 1
    e.preventDefault();

    if (page) {
      fetch(CHOSEN_API + '&page='+ pageIncrement)
        .then((res) => res.json())
        .then((data) => {
          setPage(data.page);
          setMovies(data.results);
        });
    }
  }

  const pageDecrement = (e) => {
    var pageDecrement = page - 1
    e.preventDefault();

    if (page) {
      fetch(CHOSEN_API + '&page='+ pageDecrement)
        .then((res) => res.json())
        .then((data) => {
          setPage(data.page);
          setMovies(data.results);
        });
    }
  }

  const IMG_API = "https://image.tmdb.org/t/p//w1280";

  return (
    <>
      <section id="headerIMG">
          {movies.length > 0 ? (
            <img src={IMG_API +movies[0].backdrop_path}/>
          ) : (
            <img src="https://i.ibb.co/KKzvgWJ/don-t-breathe-2-et00312665-16-07-2021-04-54-06.jpg" />
          )}
        {/* {<img src={IMG_API +movies[0].backdrop_path}/> && <img src="https://i.ibb.co/KKzvgWJ/don-t-breathe-2-et00312665-16-07-2021-04-54-06.jpg" />} */}
        <section id="filterSection">
        <form onSubmit={handleOnSubmit} id="search">
          <i className="fas fa-search"></i>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </section>

      </section>
      
      <section id="mainSection">
        <div id="cat-window">
      <form id="genreFilter" onChange={searchGenre}>

            {/* 
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </radio>  */}
         <div className="genres">
          <input type="radio" id="action" name="genre" value="28"/>
          <label for="action">Action</label>
         </div>
         <div className="genres">
          <input type="radio" id="adventure" name="genre" value="12"/>
          <label for="adventure">Adventure</label>
         </div>
         <div className="genres">
          <input type="radio" id="animation" name="genre" value="16"/>
          <label for="animation">Animation</label>
         </div>
         <div className="genres">
          <input type="radio" id="comedy" name="genre" value="35"/>
          <label for="comedy">Comedy</label>
         </div>
         <div className="genres">
          <input type="radio" id="crime" name="genre" value="80"/>
          <label for="crime">Crime</label>
         </div>
         <div className="genres">
          <input type="radio" id="documentary" name="genre" value="99"/>
          <label for="documentary">Documentary</label>
         </div>
         <div className="genres">
          <input type="radio" id="drama" name="genre" value="18"/>
          <label for="drama">Drama</label>
         </div>
         <div className="genres">
          <input type="radio" id="family" name="genre" value="10751"/>
          <label for="family">Family</label>
         </div>
         <div className="genres">
          <input type="radio" id="fantasy" name="genre" value="14"/>
          <label for="fantasy">Fantasy</label>
         </div>
         <div className="genres">
          <input type="radio" id="history" name="genre" value="36"/>
          <label for="history">History</label>
         </div>
         <div className="genres">
          <input type="radio" id="history" name="genre" value="27"/>
          <label for="horror">Horror</label>
         </div>
         <div className="genres">
          <input type="radio" id="history" name="genre" value="10402"/>
          <label for="music">Music</label>
         </div>
         <div className="genres">
          <input type="radio" id="history" name="genre" value="9648"/>
          <label for="mystery">Mystery</label>
         </div>
         <div className="genres">
          <input type="radio" id="romance" name="genre" value="10749"/>
          <label for="romance">Romance</label>
         </div>
         <div className="genres">
          <input type="radio" id="scifi" name="genre" value="878"/>
          <label for="scifi">Science Fiction</label>
         </div>
         <div className="genres">
          <input type="radio" id="tvmovie" name="genre" value="107770"/>
          <label for="tvmovie">TV Movies</label>
         </div>
         <div className="genres">
          <input type="radio" id="thriller" name="genre" value="53"/>
          <label for="thriller">Thriller</label>
         </div>
         <div className="genres">
          <input type="radio" id="war" name="genre" value="10752"/>
          <label for="war">War</label>
         </div>
         <div className="genres">
          <input type="radio" id="western" name="genre" value="37"/>
          <label for="western">Western</label>
         </div>
        </form>
        </div>
        
        <div className="movie-container">
          {movies.length > 0 ? (
            movies.map((movie) => <Movie key={movie.id} {...movie} />)
          ) : (
            <h1>No Movies Found</h1>
          )}
        </div>

        <div className="pagination">
          {page>1 && <div className="page"onClick={pageDecrement}>
            <i className="fas fa-chevron-left"></i>
          </div>}
          <div className="current" id="current">
            {page}
          </div>
          <div className="page" onClick={pageIncrement}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;