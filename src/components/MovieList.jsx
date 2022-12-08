import React, { useState } from "react";
import MovieListModal from "./MovieListModal";
import "../styles/movielist.css";
import "animate.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlus } from "@fortawesome/fontawesome-free-solid";

// Table pagination stuff
import useTable from "../hooks/useTable";
import TableFooter from "./TableFooter";

function MovieList({ movies, movieList, setMovieList, rowsPerPage }) {
  const [movieName, setMovieName] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  // Table pagination
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(movieList, page, rowsPerPage);

  //

  const deleteMovie = (id) => {
    const remainingMovies = movieList.filter((movie) => id !== movie.id);
    window.localStorage.setItem("movieList", JSON.stringify(remainingMovies));
    setMovieList(remainingMovies);
  };

  return (
    <div className="movielist-container">
      <div className="addbtn-container">
        <button
          className="movielist-addbtn animate__animated animate__fadeInDown"
          onClick={handleShow}
        >
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

      {/* Table for movies */}
      <div className="movielist-table animate__animated animate__slideInLeft">
        <table>
          <thead>
            <tr>
              <th className="movielist-head">Movie List</th>
            </tr>
          </thead>

          <tbody>
            {slice.map((movie) => (
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
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}

export default MovieList;
