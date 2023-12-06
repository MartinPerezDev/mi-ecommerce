import ItemListContainer from "./componentes/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar";
import EjemploChildren from "./componentes/Ejemplos/EjemploChildren";

import "./App.css";
import EjemploContador from "./componentes/Ejemplos/EjemploContador";
import ItemCount from "./componentes/ItemCount/ItemCount";

function App() {

  return (
    <div id="app">
      <NavBar />
      <ItemListContainer saludo="Prop enviada desde App">
        <EjemploChildren />
      </ItemListContainer>

      <EjemploContador />
      
      <ItemCount stock = {10} />
      <ItemCount stock = {20} />
    </div>
  );
}

export default App;
