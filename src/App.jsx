import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./componentes/Error/Error";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Sony" />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer saludo="Bienvenidos a Sony" />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
