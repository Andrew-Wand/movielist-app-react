import Header from "./components/Header";
import RatingTable from "./components/RatingTable";
import MovieList from "./components/MovieList";
import Spin from "./components/Spin";
import Nav from "./components/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<RatingTable />} />
          <Route path="/list" element={<MovieList />} />
          <Route path="/spin" element={<Spin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
