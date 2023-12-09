import "./Item.css"

const Item = ({ producto }) => {
  return (
    <div className="item">
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <p> {producto.nombre} </p>
      <p> precio: {producto.precio} </p>
    </div>
  );
};
export default Item;
