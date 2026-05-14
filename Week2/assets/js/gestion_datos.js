//TASK 1 (Completada)
const listaProductos = [
  // Objeto creado para almacenar los productos 
  {categoria: "Comida",id: 101,nombre: "Salchicha",precio: 2000},
  {categoria: "Comida",id: 102,nombre: "Lenteja",precio: 1000}
];

listaProductos.push({categoria: "Dispositivo",id: 103,nombre: "Telefono",precio: 500000});
listaProductos.push({categoria: "Vehiculo",id: 104, nombre: "Moto", precio: 7500000})
console.table(listaProductos);

console.log("---------------------------------------------")


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
console.log("---------------------------------------------")

//TASK 3 (Completado)
const mapCategorias = new Map();
mapCategorias.set("Comida", [listaProductos[0], listaProductos[1]] )
mapCategorias.set("Dispositivos", [listaProductos[2]])
mapCategorias.set("Vehiculo", [listaProductos[3]])
console.table(mapCategorias)

//TASK 4 (Empezando)
console.log("---------------------------------------------")
for (let key in listaProductos)//For in para mostrar las propiedades y valores de los objetos
  console.log(listaProductos[key])

mapCategorias.forEach((value , key)=> console.log(key, value))//For each para recorrer los objetos guardados

