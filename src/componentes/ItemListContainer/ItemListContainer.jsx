import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorId, postAñadirProducto, putModificarProducto, deleteProducto } from "../utilidades/fetchApi"

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const nuevoProducto = {
    nombre: "Auriculares Float Run",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 6,
    precio: 17000,
    imagen: "/img/auriculares-Float-Run.webp",
    categoria: "auriculares"
  }

  const clickEvento = ()=>{

    //Añadiendo un producto nuevo
    /*
    postAñadirProducto(nuevoProducto)
      .then((data)=> setProductos(data))
      putModificarProducto(1, { precio: 25000, nombre: "Auto 0km" })
      .then((data)=> setProductos(data))
      */
    deleteProducto(1)
      .then((data)=> setProductos(data))
  }

  useEffect(() => {

    //traemos todos los productos
    getProductos()
      .then((data)=> setProductos(data))
    
    //traemos un solo producto por id
    getProductosPorId(1)
      .then((data)=> console.log(data))
      
  }, []);

  return (
    <div className="item-list-container">
      <p className="saludo">{saludo}</p>
      <button onClick={clickEvento} >Click</button>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
