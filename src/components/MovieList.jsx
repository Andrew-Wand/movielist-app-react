import React, { useState, useMemo } from "react";

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

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig !== null &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort };
};

function MovieList(props) {
  const { movies } = props;

  const { items, requestSort, sortConfig } = useSortableData(movies);

  const getClassNameFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="movielist-container">
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
  );
}

export default MovieList;
