import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
        <h2>Ooppss el carrito esta vacio 😢</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <ul style={{ display: "flex" }}>
        {carrito.map((producto) => (
          <li
            key={producto.id}
            style={{
              border: "1px solid black",
              listStyle: "none",
              margin: "0 20px",
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ width: "100px" }}
            />
            <p>{producto.nombre}</p>
            <p>cantidad {producto.cantidad}</p>
            <button onClick={() => borrarProducto(producto.id)}>
              Eliminar producto
            </button>
          </li>
        ))}
      </ul>
      <h3>precio: {totalPrecio()}</h3>
      <button onClick={borrarCarrito}>Eliminar Carrito</button>
    </div>
  );
};
export default Carrito;
