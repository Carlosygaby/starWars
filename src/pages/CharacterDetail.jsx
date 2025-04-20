import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch para cada personaje en especifico
  const fetchPersonajesConcreto = async () => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching: ${response.status}`);
      }
      const data = await response.json();
      setCharacter(data.result.properties);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPersonajesConcreto();
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
                  src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258193-stock-illustration-anonymous-business-man-icon.jpg"
                  className="img-fluid rounded-start"
                  alt={character.name}
                />
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card-body">
                  <h2 className="card-title">{character.name}</h2>
                  <p className="card-text">
                    <b>Birth Year:</b> {character.birth_year}
                    <br></br>
                    <b>Eye Color:</b> {character.eye_color}
                    <br></br>
                    <b>Gender:</b> {character.gender}
                    <br></br>
                    <b>Hair Color:</b> {character.hair_color}
                    <br></br>
                    <b>Heigth:</b> {character.heigth}
                    <br></br>
                    <b>Mass:</b> {character.mass}
                    <br></br>
                    <b>Skin Color:</b> {character.skin_color}
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

export default CharacterDetail;
