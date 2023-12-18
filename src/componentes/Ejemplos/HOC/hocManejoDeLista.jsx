import { useState } from "react"

//Este es nuestro hoc
const hocManejoDeLista = (Componente) =>{
  
  const HocManejoDeLista = () => {
    const [tareas, setTareas] = useState([])

    const añadirTarea = (nuevaTarea)=>{
      setTareas( [...tareas, nuevaTarea ] )
    }

    const eliminarTarea = (idTarea) =>{
      const tareasFiltradas = tareas.filter((tarea)=> tarea.id !== idTarea )
      setTareas(tareasFiltradas)
    }

    //Filtrado tareas
    //modificacion tareas

    return <Componente tareas={tareas} añadirTarea={añadirTarea} eliminarTarea={eliminarTarea}  />
  }

  return HocManejoDeLista

}

export default hocManejoDeLista
