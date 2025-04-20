import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SpeciesZone = () => {
  const { store, dispatch } = useGlobalReducer();
  const like = (name) => {
    dispatch({ type: "Like", payload: name });
  };
  const getSpecies = async () => {
    try {
      const rawEspecies = localStorage.getItem("species");
      if (rawEspecies) {
        const especiesFromLocalStorage = JSON.parse(
          localStorage.getItem("species")
        );
        const action = {
          type: "GET SPECIES",
          payload: especiesFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/species");
        if (!response.ok) {
          throw new Error(`Error fetching species: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("species", JSON.stringify(data.results));
        const action = {
          type: "GET SPECIES",
          payload: data.results,
        };
        dispatch(action);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (store.species.length === 0) {
      getSpecies();
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {store.species.map((specie) => (
            <div key={specie.uid} className="col-sm-12 col-md-6 col-lg-4 mt-3">
              <div className="card">
                <img
                  src="https://sm.ign.com/ign_es/screenshot/default/image_n95t.jpg"
                  className="card-img-top"
                  alt={specie.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{specie.name}</h5>
                  <Link to={`/species/${specie.uid}`} className="btn btn-dark">
                    See More
                  </Link>
                  <button
                    onClick={() => like(specie.name)}
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

export default SpeciesZone;
