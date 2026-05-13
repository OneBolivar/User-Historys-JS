//TASK 1 (Completada)
const listaProductos = [
  // Objeto creado para almacenar los productos
  {id: 101,nombre: "Salchicha",precio: 2000},
  {id: 102,nombre: "Lenteja",precio: 1000}
];

listaProductos.push({id: 103,nombre: "Telefono",precio: 500000});
listaProductos.push({id: 104, nombre: "Moto", precio: 7500000})
console.table(listaProductos);


//TASK 2 (Completada)
let setNumeros = new Set([1, 2, 3, 1, 2, 5]); //Arreglo que no muestra datos repetidos
setNumeros.add(6);
let verificacion = setNumeros.has(7);
console.log("------------------------------")
console.log("¿EL numero 7 existe en el arreglo?: " + verificacion);
console.log(setNumeros)
console.log("------------------------------")
let borrarNumero = setNumeros.delete(1);
console.log(" ¿El numero 1 fue borrado correctamente?: " + borrarNumero);
console.log(setNumeros)
console.log("------------------------------")

console.log(" Los valores que tiene la lista de numeros son los siguientes: ")
for (Numero  of setNumeros) {
  console.log(Numero)
}