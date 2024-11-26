import './NavBar.css'
import {Link} from "react-router-dom";
import CartWidgets from "../CartWidgets/CartWidgets";

function NavBar(){
  return(
    <>
        <nav className="navbar navbar-expand-sm bg-transparent text-white">          
          <div className="container-fluid">
            <Link className='navbar-brand bg-transparent text-white home' to="/">Tienda</Link>
            <div className="items-nav">
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

           
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className='nav-link bg-transparent text-white' aria-current="page" to="/category/armas">Armas</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link bg-transparent text-white'  to="/category/cortas">Armas cortas</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link bg-transparent text-white' to="/category/explosivos">Explosivos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link bg-transparent text-white link-nav" to="/nosotros">Nosotros
                </Link>
                </li>
              </ul>              
            </div>   
            <form className="d-flex" role="search">
              <CartWidgets cartCount={0} />
            </form>
            </div> 

          </div>

        </nav>         
    </>
    )
}

export default NavBar;