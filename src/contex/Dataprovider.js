import { useState, useEffect, createContext } from "react";
import Data from "../Data.js";
export const Datacontex = createContext();

export const DataProvider = (props) =>{ 
 const [producto, setProducto] = useState([])



 useEffect(() =>{ 
  const producto = Data.items
  if(producto){ 
setProducto(producto)
  } else{ 
   setProducto([])
  }
    

 },[] ) 
 
 const value = { 
    producto : [producto]
 }
 
 return (
    <Datacontex.Provider value = {value}> 
    {props.children}
    </Datacontex.Provider>
 )
}