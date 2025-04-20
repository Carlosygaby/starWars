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
    case "Like":
      if (store.likes.includes(action.payload)) {
        const filtered = store.likes.filter((like) => like !== action.payload);
        localStorage.setItem("likes", JSON.stringify(filtered));
        return {
          ...store,
          likes: filtered,
        };
      } else {
        localStorage.setItem(
          "likes",
          JSON.stringify([...store.likes, action.payload])
        );
        return {
          ...store,
          likes: [...store.likes, action.payload],
        };
      }
    case "UNLIKE":
      const filtered = store.likes.filter((likes) => likes !== action.payload);
      localStorage.setItem("likes", JSON.stringify(filtered));
      return {
        ...store,
        likes: filtered,
      };
    case "SET LIKES":
      return {
        ...store,
        likes: action.payload || [],
      };
    default:
      throw Error("Unknown action.");
  }
}
