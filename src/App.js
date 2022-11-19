import Header from "./components/Header";
import RatingTable from "./components/RatingTable";
import MovieList from "./components/MovieList";
import Spin from "./components/Spin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const movies = [
    { id: 1, name: "Derp" },
    { id: 2, name: "Merp" },
  ];
  const [movieList, setMovieList] = useState(movies);

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
              />
            }
          />
          <Route path="/spin" element={<Spin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
