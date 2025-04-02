import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <i className="fa-solid fa-jedi fs-1"></i>
          </span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul className="dropdown-menu">
              <li className="d-flex">
                <Link className="dropdown-item" href="#">
                  Opción 1
                </Link>
                <button>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
