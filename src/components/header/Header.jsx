import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="header_navbar">
        <Link to="/"><img
         className="logo-circulo"
         src="../../../public/Fiteco_menor.png"
         alt="logo-circulo"
         /></Link>
        <div>
          <Link to="/Trilhas">Explorar Trilhas</Link>
          <Link to="/Cadastrar">Cadastrar trilhas</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
