import React from "react";


export const ProductoItem = ({ id, title, price, image, category, cantidad, color }) => {
  return (
    <div>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={image} alt={title}></img>
            </div>
          </a>
          <div className="producto_footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="price">${price}</p>
            <p>{cantidad}</p>
            <p>{color}</p>
            
          </div>
          <div className="boton">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#" className="">
                vista
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
