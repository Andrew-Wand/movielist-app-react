import Header from "./components/Header";
import RatingTable from "./components/RatingTable";
import MovieList from "./components/MovieList";
import Spin from "./components/Spin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  // spin the wheel

  // Data for movie movie list page
  const movies = [
    { id: 1, name: "Derp" },
    { id: 2, name: "Merp" },
  ];

  const localMovie = localStorage.getItem("movieList")
    ? JSON.parse(localStorage.getItem("movieList"))
    : [];

  const [movieList, setMovieList] = useState(localMovie);

  useEffect(() => {
    const json = JSON.stringify(movieList);
    window.localStorage.setItem("movieList", json);
  }, [movieList]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RatingTable movieList={movieList} />} />
          <Route
            path="/list"
            element={
              <MovieList
                movies={movies}
                movieList={movieList}
                setMovieList={setMovieList}
                rowsPerPage={8}
              />
            }
          />
          <Route path="/spin" element={<Spin movieList={movieList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
