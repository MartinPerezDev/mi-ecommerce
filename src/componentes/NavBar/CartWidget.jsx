import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext)

  return (
    <Link to="/carrito" id="cartwidget">
      <img src="/img/carrito.png" alt="icono de carrito" />
      <p>{totalCantidad()}</p>
    </Link>
  )
}

export default CartWidget