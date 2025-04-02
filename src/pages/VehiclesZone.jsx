import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
const VehiclesZone = () => {
  const { store } = useGlobalReducer();
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
                  <Link to={vehicle.url} className="btn btn-primary">
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

export default VehiclesZone;
