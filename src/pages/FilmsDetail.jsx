import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const FilmsDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch para cada pelicula en especifico
  const fetchPeliculaConcreto = async () => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/films/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching: ${response.status}`);
      }
      const data = await response.json();
      setFilm(data.result.properties);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPeliculaConcreto();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="container text-center">
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="card mb-3 mt-5">
            <div className="row g-0">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <img
                  src="https://www.mubis.es/media/users/553/108348/cual-sera-vuestra-primera-pelicula-del-2015-original.jpg"
                  className="img-fluid rounded-start"
                  alt={film.title}
                />
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card-body">
                  <h2 className="card-title">{film.title}</h2>
                  <p className="card-text">
                    <b>Producer:</b> {film.producer}
                    <br></br>
                    <b>Director:</b> {film.director}
                    <br></br>
                    <b>Release Date:</b> {film.release_date}
                    <br></br>
                    <b>Opening Crawl:</b> {film.opening_crawl}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilmsDetail;
