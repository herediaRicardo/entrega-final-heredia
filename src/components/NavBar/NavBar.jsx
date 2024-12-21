import { useState } from 'react';
import './NavBar.css'
import {Link} from "react-router-dom";
import CartWidgets from "../CartWidget/CartWidget";


function NavBar(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md text-white">
      <div className="container-fluid">
        <Link className="navbar-brand nav-link home" to="/">Tienda</Link>
        <div className="items-nav">
          {/* Botón Hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            {/* Ícono de hamburguesa */}
            <span className={`navbar-toggler-icon ${isMenuOpen ? 'd-none' : ''}`}></span>
            {/* Ícono de cerrar */}
            <span className={`close-icon ${isMenuOpen ? '' : 'd-none'}`}>&#x2715;</span>
          </button>

          {/* Menú de Navegación */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/category/armas" onClick={handleLinkClick}>
                  Armas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/cortas" onClick={handleLinkClick}>
                  Armas cortas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/explosivos" onClick={handleLinkClick}>
                  Explosivos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros" onClick={handleLinkClick}>
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Ícono del Carrito */}
          <div className="d-flex" role="search">
              <li>
                <Link to="/cart" onClick={handleLinkClick}><CartWidgets cartCount={0} />
                </Link>
              </li>
            
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;