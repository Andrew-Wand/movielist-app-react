import { useState, useEffect } from "react";

function RatingTable({ movieList }) {
  const localMovie = localStorage.getItem("watchedMovies")
    ? JSON.parse(localStorage.getItem("watchedMovies"))
    : [];

  const [watchedMovies, setWatchedMovies] = useState(localMovie);

  useEffect(() => {
    const json = JSON.stringify(watchedMovies);
    window.localStorage.setItem("watchedMovies", json);
  }, [watchedMovies]);

  const [movieTitle, setMovieTitle] = useState("Select a movie");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState();
  const [finished, setFinished] = useState(false);

  let handleMovieChange = (e) => {
    setMovieTitle(e.target.value);
  };

  let handleDateChange = (e) => {
    setDate(e.target.value);
  };

  let handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  let handleFinishedChange = (e) => {
    setFinished(e.target.checked);
  };

  const addWatchedMovie = (watchedMovie) => {
    setWatchedMovies([watchedMovie, ...watchedMovies]);
  };

  const uuid = require("uuid");

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
      id: uuid.v4(),
      title: movieTitle,
      date: date,
      rating: rating,
      finished: finished,
    };
    addWatchedMovie(movie);
    handleClose();
    e.target.reset();
  };

  // Delete movie from list
  const handleDelete = (id) => {
    const remainingMovies = watchedMovies.filter((movie) => movie.id !== id);
    window.localStorage.setItem(
      "watchedMovies",
      JSON.stringify(remainingMovies)
    );
    setWatchedMovies(remainingMovies);
  };

  // MODAL
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="rating-table-container">
      <div className="rating-table">
        <button onClick={handleShow}>Add</button>
        <table>
          <caption>Movie Night</caption>
          <thead>
            <tr>
              <th>Movie Title </th>
              <th>Date Watched</th>
              <th>Rating</th>
              <th>Finished</th>
            </tr>
          </thead>

          <tbody>
            {watchedMovies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.date}</td>
                <td>{movie.rating}</td>
                <td>{movie.finished.toString()}</td>
                <td>
                  <button onClick={() => handleDelete(movie.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="rating-modal-container"
        style={{ opacity: show ? "1" : "0", display: show ? "block" : "none" }}
      >
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
              <select name="rating" id="rating" onChange={handleRatingChange}>
                <option value="">Select rating</option>
                <option value="10">(10) Masterpiece</option>
                <option value="9">(9) Great</option>
                <option value="8">(8) Very Good</option>
                <option value="7">(7) Good</option>
                <option value="6">(6) Fine</option>
                <option value="5">(5) Average</option>
                <option value="4">(4) Bad</option>
                <option value="3">(3) Very Bad</option>
                <option value="2">(2) Horrible</option>
                <option value="1">(1) Appalling</option>
              </select>
              <label htmlFor="finished">Finished</label>
              <input type="checkbox" onChange={handleFinishedChange} />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <div className="rating-modal-footer">
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default RatingTable;
