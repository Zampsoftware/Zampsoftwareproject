import React from "react"; 
import portada from "../../../../images/portada.jpg";
import { Link } from "react-router-dom";
export const Inicio2 = () => { 
    return( 
     <div className="inicio2">  
     <Link to="/inicio2" >
      <h1 className="title2">INICIO</h1> 
      
     </Link>
     <Link to="/Productolista" >
      <h1 className="title2">PRODUCTOS</h1>
     </Link>
     <img src={portada} alt="" className="portada"></img>
     </div>
    );
} 

export default Inicio2