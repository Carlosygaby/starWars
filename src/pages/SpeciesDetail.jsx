import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SpeciesDetail = () => {
  const { id } = useParams();
  const [specie, setSpecie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch para cada especie en especifico
  const fetchSpecieConcreto = async () => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/species/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching: ${response.status}`);
      }
      const data = await response.json();
      setSpecie(data.result.properties);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSpecieConcreto();
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
                  src="https://sm.ign.com/ign_es/screenshot/default/image_n95t.jpg"
                  className="img-fluid rounded-start"
                  alt={specie.name}
                />
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card-body">
                  <h2 className="card-title">{specie.name}</h2>
                  <p className="card-text">
                    <b>Classification:</b> {specie.classification}
                    <br></br>
                    <b>Designation:</b> {specie.designation}
                    <br></br>
                    <b>Eye Colors:</b> {specie.eye_colors}
                    <br></br>
                    <b>Skin Colors:</b> {specie.skin_colors}
                    <br></br>
                    <b>Language:</b> {specie.language}
                    <br></br>
                    <b>Hair Colors:</b> {specie.hair_colors}
                    <br></br>
                    <b>Average Lifespan:</b> {specie.average_lifespan}
                    <br></br>
                    <b>Average Height:</b> {specie.average_height}
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

export default SpeciesDetail;
