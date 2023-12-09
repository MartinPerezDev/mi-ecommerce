const productos = [
  {
    id: "axad1213",
    nombre: "Auriculares x20",
    descripcion: "Este es el mejor auricular del mundo",
    stock: 10,
    precio: 45000,
    imagen: "/img/auriculares.webp"
  },
  {
    id: "jkasd124",
    nombre: "Teclado rgb",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 2,
    precio: 12000,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_945160-MLU72603593810_112023-O.webp"
  },
];

const obtenerProductos = new Promise((resolve, reject) => {
  //Simulamos un retraso de red
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos