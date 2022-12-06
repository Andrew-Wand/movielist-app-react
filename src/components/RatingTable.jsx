import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPlus,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";

// Table pagination stuff
import TableFooter from "./TableFooter";
import useTable from "../hooks/useTable";

import "../styles/ratingtable.css";
import "../styles/ratingtablemodal.css";

function RatingTable({ movieList, rowsPerPage }) {
  // Local storage stuff
  const localMovie = localStorage.getItem("watchedMovies")
    ? JSON.parse(localStorage.getItem("watchedMovies"))
    : [];

  const [watchedMovies, setWatchedMovies] = useState(localMovie);

  useEffect(() => {
    const json = JSON.stringify(watchedMovies);
    window.localStorage.setItem("watchedMovies", json);
  }, [watchedMovies]);
  /////////////////////////////

  const [movieTitle, setMovieTitle] = useState("Select a movie");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState();
  const [finished, setFinished] = useState(false);

  // Table pagination
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(watchedMovies, page, rowsPerPage);

  //

  let handleMovieChange = (e) => {
    setMovieTitle(e.target.value);
  };

  let handleDateChange = (e) => {
    setDate(e.target.value);
  };

  let handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  // let handleFinishedChange = (e) => {
  //   setFinished(e.target.checked);
  // };

  const addWatchedMovie = (watchedMovie) => {
    setWatchedMovies([watchedMovie, ...watchedMovies]);
  };

  // Handle new movie submit/uuid set up
  const uuid = require("uuid");

  // validation for adding movie to rating table
  const formValidation = () => {
    const movie = {
      id: uuid.v4(),
      title: movieTitle,
      date: date,
      rating: rating,
      finished: finished,
    };

    if (
      movieTitle === "Select a movie" ||
      date === "" ||
      rating === undefined
    ) {
      alert("You must complete form to add movie");
    } else {
      addWatchedMovie(movie);
      handleAddClose();
      setMovieTitle("Select a movie");
      setDate("");
      setRating();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation();
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

  // MODAL ADD MOVIE open/close states
  const [showAdd, setShowAdd] = useState(false);

  const handleAddShow = () => setShowAdd(true);
  const handleAddClose = () => setShowAdd(false);

  return (
    <div className="rating-table-container ">
      <button
        className="ratingtable-btn animate__animated animate__fadeInDown "
        onClick={handleAddShow}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div className="rating-table animate__animated animate__slideInLeft ">
        <table>
          <caption className="ratinglist-head">Movie Ratings</caption>
          <thead>
            <tr>
              <th className="ratingtable-header">Title </th>
              <th className="ratingtable-header">Date</th>
              <th className="ratingtable-header">Rating</th>
              {/* <th className="ratingtable-header">Finished</th> */}
              <th className="ratingtable-header"></th>
            </tr>
          </thead>

          <tbody>
            {slice.map((movie) => (
              <tr key={movie.id}>
                <td className="ratinglist-data">{movie.title}</td>
                <td className="ratinglist-data">{movie.date}</td>
                <td className="ratinglist-data">{movie.rating}</td>
                {/* <td className="ratinglist-data">{movie.finished.toString()}</td> */}
                <td className="ratinglist-data">
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(movie.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      </div>

      {/* Rating table modal */}
      <div
        className="rating-modal-container"
        style={{
          opacity: showAdd ? "1" : "0",
          display: showAdd ? "block" : "none",
        }}
      >
        <div className="rating-modal-content">
          <div className="rating-modal-header">
            <div className="rating-title">
              <h2>Add movie</h2>
            </div>
          </div>

          <div className="rating-modal-body">
            <div className="rating-modal-form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="movies">Choose a movie</label>
                <select
                  name="movies"
                  id="movies"
                  onChange={handleMovieChange}
                  size="3"
                >
                  <option value="">Select a movie</option>
                  {movieList.map((movie) => (
                    <option key={movie.name} value={movie.name}>
                      {movie.name.toUpperCase()}
                    </option>
                  ))}
                </select>
                <label htmlFor="date">Date</label>
                <input type="date" onChange={handleDateChange} />

                <label htmlFor="rating">Rating</label>
                <select
                  name="rating"
                  id="rating"
                  onChange={handleRatingChange}
                  size="3"
                >
                  <option value="">Select rating</option>
                  <option value="😎">(10) Masterpiece</option>
                  <option value="🤩">(9) Great</option>
                  <option value="😁">(8) Very Good</option>
                  <option value="😃">(7) Good</option>
                  <option value="🙂">(6) Fine</option>
                  <option value="😐">(5) Average</option>
                  <option value="🤔">(4) Bad</option>
                  <option value="😕">(3) Very Bad</option>
                  <option value="☹️">(2) Horrible</option>
                  <option value="😴">(1) Appalling</option>
                </select>
                {/* <label htmlFor="finished">Finished</label> */}
                {/* <input type="checkbox" onChange={handleFinishedChange} /> */}
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="rating-modal-footer">
            <button onClick={handleAddClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingTable;
