import React from "react";
import Zampsoftwarelogo from "../../../images/Zampsoftwarelogo.jpeg";
import { Link } from "react-router-dom";

const Inicio = () => {
 return ( 
    
    <header>
     <Link to="/inicio2" onClick={() => console.log("Logo clicked")}>
     <div className="logo">
     <img src = {Zampsoftwarelogo} alt="logo" width="50px"></img>
     </div>
     </Link>
     <ul>
     <li>
     <Link to="/inicio2">INICIO</Link>
     </li>
     </ul>
     <ul>
     <li>
     <Link to="/Productolista">PRODUCTOS</Link>
     </li>
     </ul>
     <div className="cart">
     <box-icon name="cart"></box-icon>
     <span className="item_total">0</span>
     </div>
     </header>
 );
 
     
};

export default Inicio;
