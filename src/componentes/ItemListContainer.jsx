const ItemListContainer = ({saludo, children}) => {

  return(
    <div>
      <p>{ saludo }</p>
      { children }
    </div>
  )
}

export default ItemListContainer