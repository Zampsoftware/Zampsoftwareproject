import React, {useContext} from "react";
import {Datacontex} from "../../contex/Dataprovider";
import IMG from "../../images/blusa.png";
import imagen1 from "../../images/Nike.png";
import imagen2 from "../../images/pngwing.com (11).png";
import imagen3 from "../../images/pngwing.com (1).png";
import imagen4 from "../../images/pngwing.com (10).png";
import imagen5 from "../../images/pngwing.com (12).png";
import imagen6 from "../../images/pngwing.com (13).png";
import imagen7 from "../../images/pngwing.com (14).png";
import imagen8 from "../../images/pngwing.com (15).png";
import imagen9 from "../../images/pngwing.com (16).png";
import imagen10 from "../../images/pngwing.com (17).png";
import imagen11 from "../../images/pngwing.com (18).png";
import imagen12 from "../../images/pngwing.com (19).png";
import imagen13 from "../../images/pngwing.com (20).png";
import imagen14 from "../../images/pngwing.com (21).png";
import imagen15 from "../../images/pngwing.com (22).png";
import imagen16 from "../../images/pngwing.com (23).png";
import imagen17 from "../../images/pngwing.com (28).png";
import imagen18 from "../../images/pngwing.com (25).png";
import imagen19 from "../../images/pngwing.com (26).png";
 export const Productolista = () => { 

const value = useContext(Datacontex)
const [Producto] = value.producto[0]

console.log(Producto);




    return (
      <>
     <h1 className="title">PRODUCTOS</h1>
     <div className="productos">
      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={IMG} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>


      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen10} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>

      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen16} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>


      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen1} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$25.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>

      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen4} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>


      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen3} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>


      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen17} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>



      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen2} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>


      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen13} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>


      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen19} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>



      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen15} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>


      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen11} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>



      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen17} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>



      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={imagen18} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            Añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>


      <div className="producto">
      <a href="#">
      <div className="producto_img">
         <img src={IMG} alt=""></img>
      </div>
      </a>
      <div className="producto_footer">
         <h1>title</h1>
         <p>categoria</p>
         <p className="price">$50.000</p>
      </div>
      <div className="boton">
         <button className="btn">
            añadir al carrito
         </button>
         <div> 
         <a href="#" className="">vista</a>
         </div>
      </div>
      </div>
     </div>
     </>
    )
 }
