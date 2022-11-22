import { useState } from "react";

function RatingTable({ movieList }) {
  // const localWatched = localStorage.getItem("watchedMovies")
  //   ? JSON.parse(localStorage.getItem("watchedMovies"))
  //   : [];

  const [watchedMovies, setWatchedMovies] = useState([]);

  const [movieTitle, setMovieTitle] = useState("Select a movie");
  const [date, setDate] = useState("");

  const [formTitle, setFormTitle] = useState([]);

  let handleMovieChange = (e) => {
    setMovieTitle(e.target.value);
  };

  let handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const addWatchedMovie = (watchedMovie) => {
    setWatchedMovies([watchedMovie, ...watchedMovies]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
      title: movieTitle,
      date: date,
      // rating: rating
    };
    addWatchedMovie(movie);
  };

  return (
    <div className="rating-table-container">
      <div className="rating-table">
        <table>
          <caption>Movie Night</caption>
          <thead>
            <tr>
              <th>Movie Title </th>
              <th>Date Watched</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {watchedMovies.map((movie) => (
                <div>
                  <td>{movie.title}</td>
                  <td>{movie.date}</td>
                </div>
              ))}
              <td>(Rating)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rating-modal-container">
        <div className="rating-modal-header">
          <div className="rating-title">
            <h2>Add your movie</h2>
          </div>
        </div>
        <div className="rating-modal-content">
          <div className="modal-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="movies">Choose a movie:</label>
              <select name="movies" id="movies" onChange={handleMovieChange}>
                <option value="">Select a movie</option>
                {movieList.map((movie) => (
                  <option key={movie.name} value={movie.name}>
                    {movie.name}
                  </option>
                ))}
              </select>
              <label htmlFor="date">Date:</label>
              <input type="date" onChange={handleDateChange} />

              <label htmlFor="rating">Rating:</label>
              <input type="text" />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <div className="rating-modal-footer">
          <button>Close</button>
        </div>
      </div>
    </div>
  );
}

export default RatingTable;
