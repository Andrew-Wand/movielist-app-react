import Header from "./components/Header";
import RatingTable from "./components/RatingTable";
import MovieList from "./components/MovieList";
import Spin from "./components/Spin";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<RatingTable />} />
          <Route
            path="/list"
            element={
              <MovieList
                movies={[
                  { id: 1, name: "Derp" },
                  { id: 2, name: "Merp" },
                ]}
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
