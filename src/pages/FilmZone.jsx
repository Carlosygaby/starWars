import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const FilmZone = () => {
  const { store, dispatch } = useGlobalReducer();
  const like = (name) => {
    dispatch({ type: "Like", payload: name });
  };
  const getMovies = async () => {
    try {
      const rawMovies = localStorage.getItem("movies");
      if (rawMovies) {
        const moviesFromLocalStorage = JSON.parse(
          localStorage.getItem("movies")
        );
        const action = {
          type: "GET FILMS",
          payload: moviesFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/films");
        if (!response.ok) {
          throw new Error(`Error fetching films: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("movies", JSON.stringify(data.result));
        const action = {
          type: "GET FILMS",
          payload: data.result,
        };
        dispatch(action);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (store.films.length === 0) {
      getMovies();
    }
  });
  return (
    <>
      <div className="container">
        <div className="row">
          {store.films.map((film) => (
            <div
              key={film.properties.episode_id}
              className="col-sm-12 col-md-6 col-lg-4 mt-3"
            >
              <div className="card">
                <img
                  src="https://www.mubis.es/media/users/553/108348/cual-sera-vuestra-primera-pelicula-del-2015-original.jpg"
                  className="card-img-top"
                  alt={film.properties.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{film.properties.title}</h5>
                  <Link
                    to={`/films/${film.properties.episode_id}`}
                    className="btn btn-dark"
                  >
                    See More
                  </Link>
                  <button
                    onClick={() => like(film.properties.title)}
                    type="button"
                    className="btn fs-5"
                  >
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilmZone;
