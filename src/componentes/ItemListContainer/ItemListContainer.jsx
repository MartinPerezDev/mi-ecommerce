import { useEffect, useState } from "react";

import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";
import useCargando from "../../hooks/useCargando";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga } =
    useCargando();

  useEffect(() => {
    mostrarCargando()

    obtenerProductos
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        ocultarCargando()
      });
  }, []);

  return (
    <>
      {cargando ? (
        pantallaDeCarga
      ) : (
        <div className="item-list-container">
          <p className="saludo">{saludo}</p>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
