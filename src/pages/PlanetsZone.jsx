import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
const PlanetsZone = () => {
  const { store } = useGlobalReducer();
  return (
    <>
      <div className="container">
        <div className="row">
          {store.planets.map((planet) => (
            <div key={planet.uid} className="col-sm-12 col-md-6 col-lg-4 mt-3">
              <div className="card">
                <img
                  src="https://thumbs.dreamstime.com/b/planeta-an%C3%B3nimo-ficticio-gen%C3%A9rico-representaci%C3%B3n-d-de-un-arenoso-y-rocoso-en-alguna-parte-espacio-140801243.jpg"
                  className="card-img-top"
                  alt={planet.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <Link to={planet.url} className="btn btn-primary">
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

export default PlanetsZone;
