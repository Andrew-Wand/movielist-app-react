import React, { useState } from "react";
import MovieListModal from "./MovieListModal";
import "../styles/movielist.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlus } from "@fortawesome/fontawesome-free-solid";

function MovieList({ movies, movieList, setMovieList }) {
  const [movieName, setMovieName] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  // const { items, requestSort, getClassNameFor } = useSortableData(movieList);

  const deleteMovie = (id) => {
    const remainingMovies = movieList.filter((movie) => id !== movie.id);
    window.localStorage.setItem("movieList", JSON.stringify(remainingMovies));
    setMovieList(remainingMovies);
  };

  return (
    <div className="movielist-container">
      <div className="addbtn-container">
        <button className="movielist-addbtn" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <MovieListModal
        movies={movies}
        movieName={movieName}
        movieList={movieList}
        setMovieName={setMovieName}
        setMovieList={setMovieList}
        show={show}
        setShow={setShow}
      />
      <br />
      <div className="movielist-table">
        <table>
          <thead>
            <tr>
              <th className="movielist-head">Movie List</th>
            </tr>
          </thead>

          <tbody>
            {movieList.map((movie) => (
              <tr key={movie.id}>
                <td className="movielist-data">
                  <h3>{movie.name}</h3>
                  <button
                    className="delete-btn"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieList;
