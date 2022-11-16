import React, { useState, useMemo } from "react";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  //
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

// Movie List component //

function MovieList(props) {
  const { movies } = props;

  const { items, requestSort, sortConfig, getClassNameFor } =
    useSortableData(movies);

  // Add btn modal

  return (
    <div className="movielist-container">
      <div className="addbtn-container">
        <button className="movie-addbtn">Add</button>
      </div>
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
            {items.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieList;
