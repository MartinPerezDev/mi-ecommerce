const CondicionalProps = ({condicion}) => {

  const props = condicion ? {
    className : "verdeClass",
    title : "Este titulo se muestra si la condicion es true"
  } : {}

  return (
    <div>
      <h2 {...props} >Hola Mundo</h2>
    </div>
  )
}
export default CondicionalProps