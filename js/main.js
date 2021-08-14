function compare_nombre(a, b){
  if(a.nombre < b.nombre){
          return -1;
  }else if(a.nombre > b.nombre){
          return 1;
  }else{
          return 0;
  }
}

ordenar = [
  { id: 1,  nombre: "Guacamole", precio: 2, vegetariano: true, delivery: true, ubicacion:"Centro", tipoDeComida: "veggie"},
  { id: 2,  nombre: "La Sibarita", precio: 3, vegetariano: true, delivery: true, ubicacion:"Cordon", tipoDeComida: "veggie"},
  { id: 3,  nombre: "La Temeraria", precio: 2, vegetariano: true, delivery: true, ubicacion:"Parque Rodo", tipoDeComida: "veggie"},
  { id: 4,  nombre: "Chipotle", precio: 2, vegetariano: true, delivery: true, ubicacion:"Malvin", tipoDeComida: "veggie"},
  { id: 5,  nombre: "McDonalds", precio: 1, vegetariano: false, delivery: true, ubicacion:"Pocitos", tipoDeComida: "fast food"},
  { id: 6,  nombre: "Burger King", precio: 1, vegetariano: false, delivery: true, ubicacion:"Cordon", tipoDeComida: "fast food"},
  { id: 7,  nombre: "La Pasiva", precio: 2, vegetariano: false, delivery: true, ubicacion:"Centro", tipoDeComida: "fast food"},
  { id: 8,  nombre: "Pearsons", precio: 3, vegetariano: true, delivery: true, ubicacion:"Carrasco", tipoDeComida: "barbacoa"},
  { id: 9,  nombre: "Cantón Chino", precio: 2, vegetariano: false, delivery: true, ubicacion:"Pocitos", tipoDeComida: "china"},
  { id: 10,  nombre: "Sui Yuan", precio: 1, vegetariano: true, delivery: true, ubicacion:"Centro", tipoDeComida: "china"},
  { id: 11,  nombre: "Arrolladitos", precio: 1, vegetariano: true, delivery: true, ubicacion:"Palermo", tipoDeComida: "china"},
  { id: 12,  nombre: "Ramen Noodles", precio: 1, vegetariano: true, delivery: true, ubicacion:"Parque Rodo", tipoDeComida: "china"},
  { id: 13,  nombre: "Berretin", precio: 3, vegetariano: false, delivery: true, ubicacion:"Pocitos", tipoDeComida: "barbacoa"},
  { id: 14,  nombre: "Ratatouille", precio: 3, vegetariano: false, delivery: true, ubicacion:"Tres Cruces", tipoDeComida: "gourmet"},
];

console.log("Lista de restaurantes en orden alfabético según su nombre");
console.log(ordenar.sort(compare_nombre));

