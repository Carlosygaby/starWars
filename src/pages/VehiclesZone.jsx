import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const VehiclesZone = () => {
  const { store, dispatch } = useGlobalReducer();
  const like = (name) => {
    dispatch({ type: "Like", payload: name });
  };
  const getVehicles = async () => {
    try {
      const rawVehicles = localStorage.getItem("starships");
      if (rawVehicles) {
        const vehiclesFromLocalStorage = JSON.parse(
          localStorage.getItem("vehicles")
        );
        const action = {
          type: "GET VEHICLES",
          payload: vehiclesFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/vehicles");
        if (!response.ok) {
          throw new Error(`Error fetching vehicles: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("vehicles", JSON.stringify(data.results));
        const action = {
          type: "GET VEHICLES",
          payload: data.results,
        };
        dispatch(action);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (store.vehicles.length === 0) {
      getVehicles();
    }
  });
  return (
    <>
      <div className="container">
        <div className="row">
          {store.vehicles.map((vehicle) => (
            <div key={vehicle.uid} className="col-sm-12 col-md-6 col-lg-4 mt-3">
              <div className="card">
                <img
                  src="https://i.redd.it/why-does-the-star-wars-galaxy-doesnt-have-that-many-known-v0-l9xo4kxqbaj91.jpg?width=1960&format=pjpg&auto=webp&s=d6127f404f41e04bd324b6520ef8ebb906e5fd74"
                  className="card-img-top"
                  alt={vehicle.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <Link
                    to={`/vehicles/${vehicle.uid}`}
                    className="btn btn-dark"
                  >
                    See More
                  </Link>
                  <button
                    onClick={() => like(vehicle.name)}
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

export default VehiclesZone;
