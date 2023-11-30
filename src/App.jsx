import "./App.css";

function App() {
  const saludo = "Hola Mundo";

  const saludando = ()=>{
    alert("Hiciste Click")
  }

  return (
    <div id="app">
      <img src="/img/react.png" alt="" />
      <p>aasdasd</p>
      <h1> {saludo} </h1>
      <button onClick={ saludando }>Clickeame</button>
    </div>
  );
}

export default App;
