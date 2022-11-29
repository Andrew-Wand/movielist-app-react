import "../styles/movielistmodal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-free-solid";

function MovieListModal({
  movies,
  movieName,
  movieList,
  setMovieName,
  setMovieList,
  setShow,
  show,
}) {
  // Handle submit for new movie
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovieList((current) => [...current, movieName]);
    e.target.reset();
    handleClose();
  };

  // // Create New Id for each added to array
  // let lastId = Math.max.apply(
  //   null,
  //   movieList.map((item) => item.id)
  // );

  // let newId = lastId + 1;

  const uuid = require("uuid");

  const handleChange = (e) => {
    setMovieName({
      id: uuid.v4(),
      name: e.target.value,
    });
  };

  const handleClose = () => setShow(false);

  return (
    <div
      className="modal-container"
      style={{ opacity: show ? "1" : "0", display: show ? "block" : "none" }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add Movie</h4>
        </div>
        <div className="modal-body">
          <div className="modal-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type your movie here..."
                onChange={handleChange}
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieListModal;
