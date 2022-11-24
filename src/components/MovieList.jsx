import React, { useState, useMemo } from "react";

import MovieListModal from "./MovieListModal";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortedMovies = [...items];

    if (sortConfig !== null) {
      sortedMovies.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedMovies;
  }, [items, sortConfig]);

  // Onclick for sorting
  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  //  Make class name for btn
  const getClassNameFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return { items: sortedItems, requestSort, getClassNameFor };
};
///////////////////////////////////////////////////////////////////////////////////
// Movie List COMPONENT //

function MovieList({ movies, movieList, setMovieList }) {
  const [movieName, setMovieName] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const { items, requestSort, getClassNameFor } = useSortableData(movieList);

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
        movies={items}
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
          <caption>Movies</caption>
          <thead>
            <tr>
              <th>
                <button
                  type="button"
                  className={getClassNameFor("name")}
                  onClick={() => requestSort("name")}
                >
                  Name
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {movieList.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>
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
