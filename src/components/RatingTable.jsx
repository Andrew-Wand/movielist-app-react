import React, { useEffect } from "react";

function RatingTable({ movieList }) {
  return (
    <div className="rating-table-container">
      <div className="rating-table">
        <div className="test">
          <label htmlFor="movies">Choose a movie:</label>
          <select name="movies" id="movies">
            <option value="">Select a movie</option>
            {movieList.map((movie) => (
              <option value={movie.name}>{movie.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default RatingTable;
