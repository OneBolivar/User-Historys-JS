//Ejecución de los comandos (generales) al cargar la página
let nombre =  prompt("Ingrese su nombre:")/*El let es el */ 
validadorEdad()
let validadorGeneral = true
function validadorEdad(){
        let edad = prompt("Ingrese su edad: ") /*El "prompt" sirve para pedir un dato en js*/
        while (validadorGeneral){
            if (isNaN(edad) || (edad < 18) || (edad < 0)){
                alert("Error: Por favor, ingresa una edad válida en números.")
                let edad = prompt("Ingrese su edad: ")
            }else{
                validadorGeneral = false
            }        
        }
  
        
}






//------------------------------------------------------------------------------------------------------------------------------------------
//(edad != "")?alert("Hola si es una edad"):alert("Ingrese una edad valida") //ESTO ES UN CONDICIONAL TAMBIEN
// let Confirmar = confirm("¿Desea continuar?")/*El "confirm" sirve para pedir una confirmacion en js, devuelve un valor booleano (true o false) dependiendo de la respuesta del usuario*/
// if (Confirmar) {
//     alert("Hola" + " " + nombre + " " + "¡Gracias por continuar!")/*El "alert" sirve para mostrar un mensaje en js*/
// }
// else {
//     alert("Hola" + " " + nombre + " " + "¡Gracias por su visita!")
//     window.close()/*El "window.close()" sirve para cerrar la ventana del navegador, pero solo funciona si la ventana fue abierta por un script, no funcionará si el usuario abrió la página directamente*/
// }
