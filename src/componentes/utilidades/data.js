const productos = [
  {
    id: "hgt344",
    nombre: "Auriculares WF XB700",
    descripcion: "Este es el mejor auricular del mundo",
    stock: 10,
    precio: 15000,
    imagen: "/img/auriculares-WF-XB700.webp",
    categoria: "auriculares"
  },
  {
    id: "ljm322",
    nombre: "Auriculares WH CH720N",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 2,
    precio: 12000,
    imagen: "/img/auriculares-WH-CH720N.webp",
    categoria: "auriculares"
  },
  {
    id: "shx688",
    nombre: "Auriculares Float Run",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 6,
    precio: 17000,
    imagen: "/img/auriculares-Float-Run.webp",
    categoria: "auriculares"
  },
  {
    id: "jht332",
    nombre: "Televisor A80J Series",
    descripcion: "Este es el mejor televisor del mundo",
    stock: 9,
    precio: 120000,
    imagen: "/img/televisores-A80J-Series.webp",
    categoria: "televisores"
  },
  {
    id: "wes236",
    nombre: "Televisor X725F Series",
    descripcion: "Este es el mejor televisor del mundo",
    stock: 9,
    precio: 162000,
    imagen: "/img/televisores-X725F-Series.webp",
    categoria: "televisores"
  },
  {
    id: "kmt866",
    nombre: "Televisor X805H Series",
    descripcion: "Este es el mejor televisor del mundo",
    stock: 15,
    precio: 19900,
    imagen: "/img/televisores-X805H-Series.webp",
    categoria: "televisores"
  },
  {
    id: "khg522",
    nombre: "Camara ILCE 9M3",
    descripcion: "Esta es la mejor camara del mundo",
    stock: 3,
    precio: 22000,
    imagen: "/img/camaras-ILCE-9M3.webp",
    categoria: "camaras"
  },
  {
    id: "prw092",
    nombre: "Camara ILCE 6000L",
    descripcion: "Esta es la mejor camara del mundo",
    stock: 10,
    precio: 31000,
    imagen: "/img/camaras-ILCE-6000L.webp",
    categoria: "camaras"
  },
  {
    id: "ujm422",
    nombre: "Camara ZV E10",
    descripcion: "Esta es la mejor camara del mundo",
    stock: 5,
    precio: 24000,
    imagen: "/img/camaras-ZV-E10.webp",
    categoria: "camaras"
  },
];

const obtenerProductos = new Promise((resolve, reject) => {
  //Simulamos un retraso de red
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos