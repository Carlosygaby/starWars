export const initialStore = () => {
  return {
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    films: [],
    likes: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "GET CHARACTERS":
      return {
        ...store,
        characters: action.payload,
      };
    case "GET PLANETS":
      return {
        ...store,
        planets: action.payload,
      };
    case "GET STARSHIPS":
      return {
        ...store,
        starships: action.payload,
      };
    case "GET VEHICLES":
      return {
        ...store,
        vehicles: action.payload,
      };
    case "GET SPECIES":
      return {
        ...store,
        species: action.payload,
      };
    case "GET FILMS":
      return {
        ...store,
        films: action.payload,
      };
    default:
      throw Error("Unknown action.");
  }
}
