import ItemListContainer from "./componentes/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar";

import "./App.css";

function App() {

  return (
    <div id="app">
      <NavBar />
      <ItemListContainer saludo="Prop enviada desde App"/>
    </div>
  );
}

export default App;
