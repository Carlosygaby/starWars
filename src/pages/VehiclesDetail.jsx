import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VehiclesDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch para cada vehiculo en especifico
  const fetchVehiculoConcreto = async () => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching: ${response.status}`);
      }
      const data = await response.json();
      setVehicle(data.result.properties);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchVehiculoConcreto();
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
                  src="https://i.redd.it/why-does-the-star-wars-galaxy-doesnt-have-that-many-known-v0-l9xo4kxqbaj91.jpg?width=1960&format=pjpg&auto=webp&s=d6127f404f41e04bd324b6520ef8ebb906e5fd74"
                  className="img-fluid rounded-start"
                  alt={vehicle.name}
                />
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">
                    Consumables: {vehicle.consumables}
                    <br></br>
                    Cargo Capacity: {vehicle.cargo_capacity}
                    <br></br>
                    Passengers: {vehicle.passengers}
                    <br></br>
                    Max Atmosphering Speed: {vehicle.max_atmosphering_speed}
                    <br></br>
                    Crew: {vehicle.crew}
                    <br></br>
                    Length: {vehicle.length}
                    <br></br>
                    Model: {vehicle.model}
                    <br></br>
                    Cost In Credits: {vehicle.cost_in_credits}
                    <br></br>
                    Manufactured: {vehicle.manufacturer}
                    <br></br>
                    Vehicle Class: {vehicle.vehicle_class}
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

export default VehiclesDetail;
