import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
const StarShipsZone = () => {
  const { store } = useGlobalReducer();
  return (
    <>
      <div className="container">
        <div className="row">
          {store.starships.map((starship) => (
            <div
              key={starship.uid}
              className="col-sm-12 col-md-6 col-lg-4 mt-3"
            >
              <div className="card">
                <img
                  src="https://www.infoespacial.com/images/showid2/5323161?w=900&mh=700"
                  className="card-img-top"
                  alt={starship.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{starship.name}</h5>
                  <Link to={starship.url} className="btn btn-primary">
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

export default StarShipsZone;
