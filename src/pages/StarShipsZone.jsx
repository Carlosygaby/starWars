import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const StarShipsZone = () => {
  const { store, dispatch } = useGlobalReducer();
  const like = (name) => {
    dispatch({ type: "Like", payload: name });
  };
  const getStarShips = async () => {
    try {
      const rawStarships = localStorage.getItem("starships");
      if (rawStarships) {
        const starshipsFromLocalStorage = JSON.parse(
          localStorage.getItem("starships")
        );
        const action = {
          type: "GET STARSHIPS",
          payload: starshipsFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/starships");
        if (!response.ok) {
          throw new Error(`Error fetching starships: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("starships", JSON.stringify(data.results));
        const action = {
          type: "GET STARSHIPS",
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
      getStarShips();
    }
  }, []);
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
                  <Link
                    to={`/starships/${starship.uid}`}
                    className="btn btn-dark"
                  >
                    See More
                  </Link>
                  <button
                    onClick={() => like(starship.name)}
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

export default StarShipsZone;
