// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import CharactersZone from "./pages/CharactersZone";
import PlanetsZone from "./pages/PlanetsZone";
import StarShipsZone from "./pages/StarShipsZone";
import VehiclesZone from "./pages/VehiclesZone";
import SpeciesZone from "./pages/SpeciesZone";
import FilmZone from "./pages/FilmZone";
import CharacterDetail from "./pages/CharacterDetail";
import PlanetsDetail from "./pages/PlanetsDetail";
import StarshipsDetail from "./pages/StarshipsDetail";
import VehiclesDetail from "./pages/VehiclesDetail";
import SpeciesDetail from "./pages/SpeciesDetail";
import FilmsDetail from "./pages/FilmsDetail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />
      {/* Dynamic route for single items */}
      <Route path="/demo" element={<Demo />} />
      <Route path="/characters" element={<CharactersZone />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
      <Route path="/planets" element={<PlanetsZone />} />
      <Route path="/planets/:id" element={<PlanetsDetail />} />
      <Route path="/starships" element={<StarShipsZone />} />
      <Route path="/starships/:id" element={<StarshipsDetail />} />
      <Route path="/vehicles" element={<VehiclesZone />} />
      <Route path="/vehicles/:id" element={<VehiclesDetail />} />
      <Route path="/species" element={<SpeciesZone />} />
      <Route path="/species/:id" element={<SpeciesDetail />} />
      <Route path="/films" element={<FilmZone />} />
      <Route path="/films/:id" element={<FilmsDetail />} />
    </Route>
  )
);
