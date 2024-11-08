import React from "react";
import './NavBar.css'
import CardWidgets from "../CardWidgets/CardWidgets"

function NavBar(){
  return(
    <>
        <nav className="navbar navbar-expand-sm bg-transparent text-white">
          
          <div className="container-fluid flexNav">

            <a className="navbar-brand bg-transparent text-white" href="#">Home</a>
            <div className="items-nav">
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

           
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link active bg-transparent text-white" aria-current="page" href="#">Store</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link bg-transparent text-white" href="#">Join</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link bg-transparent text-white" href="#">Tech</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link bg-transparent text-white" href="#">Contact</a>
                </li>
              </ul>              
            </div>   
               <CardWidgets amount={0} />
            </div> 

          </div>

        </nav>         
    </>
    )
}

export default NavBar;