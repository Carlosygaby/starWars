import { Link } from "react-router-dom";

const MenuNavigate = () => {
  return (
    <>
      <div className="sidebar d-flex flex-column ml-5">
        <Link to="/" className="nav-link">
          <i className="fa-solid fa-jedi"></i>Inicio
        </Link>
        <Link to="/characters" className="nav-link">
          <i className="fa-solid fa-person fa-2xl"></i>
          &nbsp;&nbsp;&nbsp;Characters
        </Link>
        <Link to="/planets" className="nav-link">
          <i className="fa-solid fa-earth-americas"></i>&nbsp; Planets
        </Link>
        <Link to="/starships" className="nav-link">
          <i className="fa-solid fa-jet-fighter-up"></i>&nbsp; Starships
        </Link>
        <Link to="/vehicles" className="nav-link">
          <i className="fa-solid fa-caravan"></i>&nbsp; Vehicles
        </Link>
        <Link to="/species" className="nav-link">
          <i className="fa-brands fa-wolf-pack-battalion"></i>&nbsp; Species
        </Link>
        <Link to="/films" className="nav-link">
          <i className="fa-solid fa-photo-film"></i>&nbsp; Films
        </Link>
      </div>
    </>
  );
};

export default MenuNavigate;
