import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StarshipsDetail = () => {
  const { id } = useParams();
  const [starShip, setStarShip] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch para cada Nave en especifico
  const fetchNaveConcreto = async () => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/starships/${id}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching: ${response.status}`);
      }
      const data = await response.json();
      setStarShip(data.result.properties);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchNaveConcreto();
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
                  src="https://www.infoespacial.com/images/showid2/5323161?w=900&mh=700"
                  className="img-fluid rounded-start"
                  alt={starShip.name}
                />
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card-body">
                  <h2 className="card-title">{starShip.name}</h2>
                  <p className="card-text">
                    <b>Consumables:</b> {starShip.consumable}
                    <br></br>
                    <b>Cargo Capacity:</b> {starShip.cargo_capacity}
                    <br></br>
                    <b>Passengers:</b> {starShip.passengers}
                    <br></br>
                    <b>Max Atmosphering Speed:</b>{" "}
                    {starShip.max_atmosphering_speed}
                    <br></br>
                    <b>Crew:</b> {starShip.crew}
                    <br></br>
                    <b>Length:</b> {starShip.length}
                    <br></br>
                    <b>Model:</b> {starShip.model}
                    <br></br>
                    <b>Cost In Credits:</b> {starShip.cost_in_credits}
                    <br></br>
                    <b>Manufactured:</b> {starShip.manufacturer}
                    <br></br>
                    <b>MGLT:</b> {starShip.MGLT}
                    <br></br>
                    <b>Starship Class:</b> {starShip.starship_class}
                    <br></br>
                    <b>Hyperdrive Rating:</b> {starShip.hyperdrive_rating}
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

export default StarshipsDetail;
