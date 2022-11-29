import "../styles/header.css";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/fontawesome-free-solid";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-inner">
          <div className="header-content">
            <div className="header-title">
              <h1>Movie Night!</h1>
            </div>
            <div className="header-icon">
              <FontAwesomeIcon icon={faFilm} />
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
