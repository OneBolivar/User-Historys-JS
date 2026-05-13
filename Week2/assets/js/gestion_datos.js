//TASK 1 (Completada)
const listaProductos = [
  // Objeto creado para almacenar los productos
  {id: 101,nombre: "Salchicha",precio: 2000},
  {id: 102,nombre: "Lenteja",precio: 1000}
];

listaProductos.push({id: 103,nombre: "Telefono",precio: 500000});
listaProductos.push({id: 104, nombre: "Moto", precio: 7500000})
console.table(listaProductos);


// //TASK 2 (Completada)
// let setNumeros = new Set([1, 2, 3, 1, 2, 5]); //Arreglo que no muestra datos repetidos
// setNumeros.add(6);
// let verificacion = setNumeros.has(7);
// console.log("------------------------------")
// console.log("¿EL numero 7 existe en el arreglo?: " + verificacion);
// console.log(setNumeros)
// console.log("------------------------------")
// let borrarNumero = setNumeros.delete(1);
// console.log(" ¿El numero 1 fue borrado correctamente?: " + borrarNumero);
// console.log(setNumeros)
// console.log("------------------------------")

// console.log(" Los valores que tiene la lista de numeros son los siguientes: ")
// for (Numero  of setNumeros) {
//   console.log(Numero)
// }

//TASK 3 (Arreglar problema de clave repetida, ya sabemos que es por el set)
const mapCategorias = new Map();
mapCategorias.set("Comida", listaProductos[0].nombre)
mapCategorias.set("Comida", listaProductos[1].nombre)
mapCategorias.set("Dispositivos", listaProductos[2].nombre)
mapCategorias.set("Vehiculo", listaProductos[3].nombre)

console.table(mapCategorias);
console.error("La tabla tiene un error, debe mostrar los datos de comida sin que se eliminen")
