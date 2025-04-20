import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  // fetch get de los personajes
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
  // fetch get de los planetas
  const getPlanets = async () => {
    try {
      const rawPlanets = localStorage.getItem("starships");
      if (rawPlanets) {
        const planetsFromLocalStorage = JSON.parse(
          localStorage.getItem("planets")
        );
        const action = {
          type: "GET PLANETS",
          payload: planetsFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/planets");
        if (!response.ok) {
          throw new Error(`Error fetching planets: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("planets", JSON.stringify(data.results));

        const action = {
          type: "GET PLANETS",
          payload: data.results,
        };
        dispatch(action);
      }
    } catch (err) {
      console.error(err);
    }
  };
  // get fetch de las naves
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
  // get fetch de los vehiculos
  const getVehicles = async () => {
    try {
      const rawVehicles = localStorage.getItem("starships");
      if (rawVehicles) {
        const vehiclesFromLocalStorage = JSON.parse(
          localStorage.getItem("vehicles")
        );
        const action = {
          type: "GET VEHICLES",
          payload: vehiclesFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/vehicles");
        if (!response.ok) {
          throw new Error(`Error fetching vehicles: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("vehicles", JSON.stringify(data.results));
        const action = {
          type: "GET VEHICLES",
          payload: data.results,
        };
        dispatch(action);
      }
    } catch (err) {
      console.error(err);
    }
  };
  // get fetch de las especies
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
  // get fetch de las peliculas
  const getMovies = async () => {
    try {
      const rawMovies = localStorage.getItem("movies");
      if (rawMovies) {
        const moviesFromLocalStorage = JSON.parse(
          localStorage.getItem("movies")
        );
        const action = {
          type: "GET FILMS",
          payload: moviesFromLocalStorage,
        };
        dispatch(action);
      } else {
        const response = await fetch("https://www.swapi.tech/api/films");
        if (!response.ok) {
          throw new Error(`Error fetching films: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem("movies", JSON.stringify(data.result));
        const action = {
          type: "GET FILMS",
          payload: data.result,
        };
        dispatch(action);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const like = (name) => {
    dispatch({ type: "Like", payload: name });
  };

  const setLikesByLocalStorage = () => {
    const like = localStorage.getItem("likes");
    if (like) {
      dispatch({
        type: "SET LIKES",
        payload: JSON.parse(localStorage.getItem("likes")),
      });
    }
  };
  useEffect(() => {
    getCharacters();
    getPlanets();
    getStarShips();
    getVehicles();
    getSpecies();
    getMovies();
    setLikesByLocalStorage();
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
              <div key={character.uid} className="col-sm-12 col-md-4 col-lg-4">
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
                      See more
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
        {/* LINEAS DE LOS PLANETAS */}
        <h1 className="mt-4">Planets</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.planets.map((planet) => (
              <div key={planet.uid} className="col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                  <img
                    src="https://thumbs.dreamstime.com/b/planeta-an%C3%B3nimo-ficticio-gen%C3%A9rico-representaci%C3%B3n-d-de-un-arenoso-y-rocoso-en-alguna-parte-espacio-140801243.jpg"
                    className="card-img-top"
                    alt={`planets/${planet.uid}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>

                    <Link
                      to={`/planets/${planet.uid}`}
                      className="btn btn-dark"
                    >
                      See more
                    </Link>
                    <button
                      onClick={() => like(planet.name)}
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
        {/* LINEAS DE LAS NAVES */}
        <h1 className="mt-4">Starships</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.starships.map((starship) => (
              <div key={starship.uid} className="col-sm-12 col-md-4 col-lg-4">
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
                      See more
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
        {/* LINEAS DE LOS VEHICULOS */}
        <h1 className="mt-4">Vehicles</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.vehicles.map((vehicle) => (
              <div key={vehicle.uid} className="col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                  <img
                    src="https://i.redd.it/why-does-the-star-wars-galaxy-doesnt-have-that-many-known-v0-l9xo4kxqbaj91.jpg?width=1960&format=pjpg&auto=webp&s=d6127f404f41e04bd324b6520ef8ebb906e5fd74"
                    className="card-img-top"
                    alt={vehicle.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <Link
                      to={`/vehicles/${vehicle.uid}`}
                      className="btn btn-dark"
                    >
                      See more
                    </Link>
                    <button
                      onClick={() => like(vehicle.name)}
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
        {/* LINEA DE LAS ESPECIES*/}
        <h1 className="mt-4">Species</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.species.map((specie) => (
              <div key={specie.uid} className="col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                  <img
                    src="https://sm.ign.com/ign_es/screenshot/default/image_n95t.jpg"
                    className="card-img-top"
                    alt={specie.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{specie.name}</h5>
                    <Link
                      to={`/species/${specie.uid}`}
                      className="btn btn-dark"
                    >
                      See more
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
        {/*LINEA DE LAS PELICULAS*/}
        <h1 className="mt-4">Films</h1>
        <div className="scroll-container ">
          <div className="row flex-nowrap">
            {store.films.map((film) => (
              <div
                key={film.properties.episode_id}
                className="col-sm-12 col-md-4 col-lg-4"
              >
                <div className="card">
                  <img
                    src="https://www.mubis.es/media/users/553/108348/cual-sera-vuestra-primera-pelicula-del-2015-original.jpg"
                    className="card-img-top"
                    alt={film.properties.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{film.properties.title}</h5>
                    <Link
                      to={`/films/${film.properties.episode_id}`}
                      className="btn btn-dark"
                    >
                      See more
                    </Link>
                    <button
                      onClick={() => like(film.properties.title)}
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
      </div>
    </>
  );
};
