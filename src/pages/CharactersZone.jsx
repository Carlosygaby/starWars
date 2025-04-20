import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const CharactersZone = () => {
  const { store, dispatch } = useGlobalReducer();
  const like = (name) => {
    dispatch({ type: "Like", payload: name });
  };
  const getCharacters = async () => {
    try {
      if (localStorage.getItem("characters")) {
        const charactersFromLocalStorage = JSON.parse(
          localStorage.getItem("characters")
        );
        const action = {
          type: "GET CHARACTERS",
          payload: charactersFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/people");
        if (!response.ok) {
          throw new Error(`Error fetching characters: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("characters", JSON.stringify(data.results));
        const action = {
          type: "GET CHARACTERS",
          payload: data.results,
        };
        dispatch(action);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (store.characters.length === 0) {
      getCharacters();
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {store.characters.map((character) => (
            <div
              key={character.uid}
              className="col-sm-12 col-md-6 col-lg-4 mt-3"
            >
              <div className="card">
                <img
                  src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258193-stock-illustration-anonymous-business-man-icon.jpg"
                  className="card-img-top"
                  alt={character.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <Link
                    to={`/character/${character.uid}`}
                    className="btn btn-dark"
                  >
                    See More
                  </Link>
                  <button
                    onClick={() => like(character.name)}
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

export default CharactersZone;
