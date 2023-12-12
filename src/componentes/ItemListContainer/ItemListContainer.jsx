import { useEffect, useState } from "react";

import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, []);

  return (
    <div className="item-list-container">
      <p className="saludo">{saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
