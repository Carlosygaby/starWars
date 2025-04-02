import { Link } from "react-router-dom";

const MenuNavigate = () => {
  return (
    <>
      <div className="sidebar d-flex flex-column">
        <Link to="/" className="nav-link">
          <i className="fa-solid fa-jedi"></i> Inicio
        </Link>
        <Link to="/characters" className="nav-link">
          <i class="fa-solid fa-person"></i> Characters
        </Link>
        <Link to="/planets" className="nav-link">
          <i class="fa-solid fa-earth-americas"></i> Planets
        </Link>
        <Link to="/starships" className="nav-link">
          <i class="fa-solid fa-jet-fighter-up"></i> Starships
        </Link>
        <Link to="/vehicles" className="nav-link">
          <i class="fa-solid fa-caravan"></i> Vehicles
        </Link>
        <Link to="/species" className="nav-link">
          <i class="fa-brands fa-wolf-pack-battalion"></i> Species
        </Link>
        <Link to="/films" className="nav-link">
          <i class="fa-solid fa-photo-film"></i> Films
        </Link>
      </div>
    </>
  );
};

export default MenuNavigate;
