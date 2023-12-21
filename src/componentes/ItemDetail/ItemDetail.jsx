import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);

  const agregarAlCarrito = (contador) => {
    console.log(contador);
    setToggle(true)
  };

  return (
    <div className="item-detail">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        {toggle ? (
          <Link to="/carrito">Terminar mi compra</Link>
        ) : (
          <ItemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
