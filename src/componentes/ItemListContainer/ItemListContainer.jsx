import { useEffect, useState } from "react";

import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners"

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const { categoria } = useParams();

  useEffect(() => {
    
    setProductos([
      {
        id: "hgt344",
        nombre: "asdasdasdasd",
        descripcion: "Este es el mejor auricular del mundo",
        stock: 10,
        precio: 15000,
        imagen: "/img/auriculares-WF-XB700.webp",
        categoria: "auriculares"
      },
      {
        id: "ljm322",
        nombre: "Auriculares WH CH720N",
        descripcion: "Este es el mejor teclado del mundo",
        stock: 2,
        precio: 12000,
        imagen: "/img/auriculares-WH-CH720N.webp",
        categoria: "auriculares"
      }
    ])

  }, [categoria]);

  return (
    <>
      {cargando ? (
        <div className="cargando">
          <MoonLoader color="black" />
        </div>
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
