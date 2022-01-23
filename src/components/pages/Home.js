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
    e.preventDefault();

    var select = document.getElementById("genres");
    var value = select.options[select.selectedIndex].value;
    fetch(SEARCH_BY_GENRE_API + value)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setPage(data.page);
      });

    CHOSEN_API = SEARCH_BY_GENRE_API + value
    setSearchByGenre("");
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
      <form id="genreFilter">
          <i className="fas fa-filter"></i>
          <select id="genres" name="genreList" onChange={searchGenre}>
            <option disabled>Filter By Genre...</option>
            <option value="28">Action</option>
            <option value="12">Advenure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="107770">TV Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        </form>
        {/* <h1 id="headerTxt" style={{ textAlign:'center', padding:'10px 20px 10px 10px'}}>
          Featured Shows
        </h1> */}

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

      {/* <section id="favourites">
        <h1 style={{ padding: "20px" }}>My Favourites</h1>
      </section> */}
    </>
  );
}

export default Home;