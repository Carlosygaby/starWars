import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  // Funcion para borrar manualmente un personaje de los me gusta
  const unlikeManual = (name) => {
    dispatch({ type: "UNLIKE", payload: name });
  };
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
              {store.likes
                ? store.likes.map((personaje, index) => (
                    <li key={index} className="d-flex">
                      <Link className="dropdown-item" href="#">
                        {personaje}
                      </Link>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => unlikeManual(personaje)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
