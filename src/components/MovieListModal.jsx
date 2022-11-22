function MovieListModal({
  movies,
  movieName,
  movieList,
  setMovieName,
  setMovieList,
}) {
  // Handle submit for new movie
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovieList((current) => [...current, movieName]);
    e.target.reset();
  };

  // Create New Id for each added to array
  let lastId = Math.max.apply(
    null,
    movieList.map((item) => item.id)
  );

  let newId = lastId + 1;

  const handleChange = (e) => {
    setMovieName({
      id: newId,
      name: e.target.value,
    });
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal</h4>
        </div>
        <div className="modal-body">
          <div className="modal-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Movie:</label>
              <input type="text" onChange={handleChange} />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button>Close</button>
        </div>
      </div>
    </div>
  );
}

export default MovieListModal;
