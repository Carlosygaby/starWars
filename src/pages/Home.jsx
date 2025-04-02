import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  // fetch get de los personajes
  const getCharacters = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/people");
      if (!response.ok) {
        throw new Error(`Error fetching characters: ${response.status}`);
      }
      const data = await response.json();
      const action = {
        type: "GET CHARACTERS",
        payload: data.results,
      };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
  // fetch get de los planetas
  const getPlanets = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets");
      if (!response.ok) {
        throw new Error(`Error fetching planets: ${response.status}`);
      }
      const data = await response.json();
      const action = {
        type: "GET PLANETS",
        payload: data.results,
      };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
  // get fetch de las naves
  const getStarShips = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships");
      if (!response.ok) {
        throw new Error(`Error fetching starships: ${response.status}`);
      }
      const data = await response.json();
      const action = {
        type: "GET STARSHIPS",
        payload: data.results,
      };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
  // get fetch de los vehiculos
  const getVehicles = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/vehicles");
      if (!response.ok) {
        throw new Error(`Error fetching vehicles: ${response.status}`);
      }
      const data = await response.json();
      const action = {
        type: "GET VEHICLES",
        payload: data.results,
      };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
  // get fetch de las especies
  const getSpecies = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/species");
      if (!response.ok) {
        throw new Error(`Error fetching species: ${response.status}`);
      }
      const data = await response.json();
      const action = {
        type: "GET SPECIES",
        payload: data.results,
      };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
  // get fetch de las peliculas
  const getMovies = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/films");
      if (!response.ok) {
        throw new Error(`Error fetching films: ${response.status}`);
      }
      const data = await response.json();
      const action = {
        type: "GET FILMS",
        payload: data.result,
      };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCharacters();
    getPlanets();
    getStarShips();
    getVehicles();
    getSpecies();
    getMovies();
  }, []);
  return (
    <>
      {/* CONTAINER DE TODA LA INFORMACION */}
      <div className="container">
        {/* LINEA DE LOS PERSONAJES */}
        <h1 className="mt-4">Characters</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.characters.map((character) => (
              <div key={character.uid} className="col-4">
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
            ;
          </div>
        </div>
        {/* LINEAS DE LOS PLANETAS */}
        <h1 className="mt-4">Planets</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.planets.map((planet) => (
              <div key={planet.uid} className="col-4">
                <div className="card">
                  <img
                    src="https://thumbs.dreamstime.com/b/planeta-an%C3%B3nimo-ficticio-gen%C3%A9rico-representaci%C3%B3n-d-de-un-arenoso-y-rocoso-en-alguna-parte-espacio-140801243.jpg"
                    className="card-img-top"
                    alt={planet.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>

                    <Link to={planet.url} className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* LINEAS DE LAS NAVES */}
        <h1 className="mt-4">Starships</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.starships.map((starship) => (
              <div key={starship.uid} className="col-4">
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
        {/* LINEAS DE LOS VEHICULOS */}
        <h1 className="mt-4">Vehicles</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.vehicles.map((vehicle) => (
              <div key={vehicle.uid} className="col-4">
                <div className="card">
                  <img
                    src="https://i.redd.it/why-does-the-star-wars-galaxy-doesnt-have-that-many-known-v0-l9xo4kxqbaj91.jpg?width=1960&format=pjpg&auto=webp&s=d6127f404f41e04bd324b6520ef8ebb906e5fd74"
                    className="card-img-top"
                    alt={vehicle.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <Link to={vehicle.url} className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* LINEA DE LAS ESPECIES*/}
        <h1 className="mt-4">Species</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.species.map((specie) => (
              <div key={specie.uid} className="col-4">
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
        {/*LINEA DE LAS PELICULAS*/}
        <h1 className="mt-4">Films</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.films.map((film) => (
              <div key={film.properties.episode_id} className="col-4">
                <div className="card">
                  <img
                    src="https://www.mubis.es/media/users/553/108348/cual-sera-vuestra-primera-pelicula-del-2015-original.jpg"
                    className="card-img-top"
                    alt={film.properties.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{film.properties.title}</h5>
                    <Link to={film.properties.url} className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
