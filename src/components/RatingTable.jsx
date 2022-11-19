import { useState } from "react";

function RatingTable({ movieList }) {
  const [movieTitle, setMovieTitle] = useState("Select a movie");

  let handleMovieChange = (e) => {
    setMovieTitle(e.target.value);
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
              <td>(Movie title) {movieTitle}</td>
              <td>(Date Watched)</td>
              <td>(Rating)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rating-modal-container">
        <div className="rating-modal-content">
          <label htmlFor="movies">Choose a movie:</label>
          <select name="movies" id="movies" onChange={handleMovieChange}>
            <option value="">Select a movie</option>
            {movieList.map((movie) => (
              <option key={movie.name} value={movie.name}>
                {movie.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default RatingTable;
