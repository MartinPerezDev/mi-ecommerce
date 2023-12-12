import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <div id="app">
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a Sony" />
    </div>
  );
}

export default App;
