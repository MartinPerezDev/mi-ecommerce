import CondicionalProps from "./CondicionalProps"

import "./RenderingCondicional.css"

const RenderingCondicional = () => {
  //const [datos, setDatos] = useState([ {nombre: "Hernan"}, { nombre: "Martin" } ])


  return (
    <>
      <CondicionalProps condicion={false} />
    </>
  )
}
export default RenderingCondicional