import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const SpeciesZone = () => {
  const { store } = useGlobalReducer();
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
                  <Link to={specie.url} className="btn btn-primary">
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

export default SpeciesZone;
