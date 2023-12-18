import hocManejoDeLista from "./hocManejodeLista"

const ListadoTareas = ({ tareas, añadirTarea, eliminarTarea }) => {

  const clickAñadirTarea = ()=>{
    añadirTarea( { id: tareas.length, nombre: `Tarea ${tareas.length + 1}` } )
  }

  return (
    <div>
      <button onClick={clickAñadirTarea}>Agregar Tarea</button>
      {
        tareas.map((tarea)=> (
          <div key={tarea.id + tarea.nombre} >
            <p>{tarea.nombre}</p>
            <button onClick={ ()=> eliminarTarea(tarea.id) }>Eliminar</button>
          </div>
        ))
      }
    </div>
  )
}

const ListadoTareasConHoc = hocManejoDeLista(ListadoTareas)

export default ListadoTareasConHoc