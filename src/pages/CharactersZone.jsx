import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
const CharactersZone = () => {
  const { store } = useGlobalReducer();
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
                  <Link to={character.url} className="btn btn-primary">
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

export default CharactersZone;
