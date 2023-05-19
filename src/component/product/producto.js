import React, {useContext} from "react";
import {Datacontex} from "../../contex/Dataprovider";
import {ProductoItem} from "./productoitem";
 export const Productolista = () => { 
 
   const value = useContext(Datacontex);
   const Producto = value.producto;


console.log(Producto);




    return (
      <>
     <h1 className="title">PRODUCTOS</h1>
     <div className="productos">
      { 
      Producto.map(producto => {
         
         return (
           <ProductoItem
             key={producto.id}
             id={producto.id}
             title={producto.title}
             price={producto.price}
             image={producto.image}
             category={producto.category}
             cantidad={producto.cantidad}
             color={producto.color}
           />
         );
       })
      }
     
     

     </div>
     </>
    )
 }
