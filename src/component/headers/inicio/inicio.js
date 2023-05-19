import React from "react";
import portada from '../../../images/portada.jpg';
import { Link } from "react-router-dom";

const Inicio = () => {
 return ( 
    <div className="inicio">  
      <Link to="/*" >
       <h1 className="title2">INICIO</h1> 
       
      </Link>
      <Link to="/Productolista" >
       <h1 className="title2">PRODUCTOS</h1>
      </Link>
      <img src={portada} alt="" className="portada"></img>
      </div>
    
 );
 
     
};

export default Inicio;
