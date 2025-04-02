import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
const FilmZone = () => {
  const { store } = useGlobalReducer();
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
                  <Link to={film.properties.url} className="btn btn-primary">
                    Go somewhere
                  </Link>
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
