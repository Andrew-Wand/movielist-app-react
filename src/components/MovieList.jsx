import React, { useState } from "react";
import MovieListModal from "./MovieListModal";
import "../styles/movielist.css";

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
          Add
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
              <th className="movielist-head">Movies</th>
            </tr>
          </thead>

          <tbody>
            {movieList.map((movie) => (
              <tr key={movie.id}>
                <td className="movielist-data">
                  {movie.name}{" "}
                  <button onClick={() => deleteMovie(movie.id)}>Delete</button>
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
