import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PlanetsDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch para cada planeta en especifico
  const fetchPlanetaConcreto = async () => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching: ${response.status}`);
      }
      const data = await response.json();
      setPlanet(data.result.properties);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPlanetaConcreto();
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
                  src="https://thumbs.dreamstime.com/b/planeta-an%C3%B3nimo-ficticio-gen%C3%A9rico-representaci%C3%B3n-d-de-un-arenoso-y-rocoso-en-alguna-parte-espacio-140801243.jpg"
                  className="img-fluid rounded-start"
                  alt=""
                />
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card-body">
                  <h2 className="card-title">{planet.name}</h2>
                  <p className="card-text">
                    <b>Climate:</b> {planet.climate}
                    <br></br>
                    <b>Surface Water:</b> {planet.surface_water}
                    <br></br>
                    <b>Diameter:</b> {planet.diameter}
                    <br></br>
                    <b>Rotation Period:</b> {planet.rotation_period}
                    <br></br>
                    <b>Terrain:</b> {planet.terrain}
                    <br></br>
                    <b>Gravity:</b> {planet.gravity}
                    <br></br>
                    <b>Orbital Period:</b> {planet.orbital_period}
                    <br></br>
                    <b>Population:</b> {planet.population}
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

export default PlanetsDetail;
