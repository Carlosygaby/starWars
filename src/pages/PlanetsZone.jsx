import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const PlanetsZone = () => {
  const { store, dispatch } = useGlobalReducer();
  const like = (name) => {
    dispatch({ type: "Like", payload: name });
  };
  const getPlanets = async () => {
    try {
      const rawPlanets = localStorage.getItem("starships");
      if (rawPlanets) {
        const planetsFromLocalStorage = JSON.parse(
          localStorage.getItem("planets")
        );
        const action = {
          type: "GET PLANETS",
          payload: planetsFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/planets");
        if (!response.ok) {
          throw new Error(`Error fetching planets: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("planets", JSON.stringify(data.results));

        const action = {
          type: "GET PLANETS",
          payload: data.results,
        };
        dispatch(action);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (store.planets.length === 0) {
      getPlanets();
    }
  }, []);
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
                  <Link to={`/planets/${planet.uid}`} className="btn btn-dark">
                    See More
                  </Link>
                  <button
                    onClick={() => like(planet.name)}
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

export default PlanetsZone;
