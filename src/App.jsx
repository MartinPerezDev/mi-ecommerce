import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

import "./App.css";
import ManejoDeLista from "./componentes/Ejemplos/RenderProps/ManejoDeLista";
import ListadoTareas from "./componentes/Ejemplos/RenderProps/ListadoTareas";

function App() {

  
  const funcionRender = (tareas, añadirTarea, eliminarTarea) => {
    return (
      <ListadoTareas
        tareas={tareas}
        añadirTarea={añadirTarea}
        eliminarTarea={eliminarTarea}
      />
    );
  };

  return (
    <div id="app">
      <NavBar />
      <ManejoDeLista render={funcionRender} />
    </div>
  );
}

export default App;
