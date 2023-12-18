import EjemploChildren from "./EjemploChildren"

const ComponentePadre = () => {
  return (
    <div>
      <EjemploChildren titulo="Mi caja">
        <p>Contenido Personalizado</p>
        <button>Clickeame</button>
      </EjemploChildren>

      <EjemploChildren titulo="Mi caja 2">
        <button>Clickeame</button>
      </EjemploChildren>
    </div>
  )
}
export default ComponentePadre