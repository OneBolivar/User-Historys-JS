//Ejecución de los comandos (generales) al cargar la página
let nombre =  prompt("Ingrese su nombre:")/*El let es el */ 
validadorNumero()//Esta funncion esta creada para validar la edad
let validadorGeneral = true //Validador general creado para hacer la funcion de un while true
function validadorNumero(){
        let edad = prompt("Ingrese su edad: ") /*El "prompt" sirve para pedir un dato en js*/
        (edad < 18)?alert("Hola" + nombre +  "eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"): alert("Hola" + nombre +  "eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!")
        while (validadorGeneral){//Validador para que se ejecute siempre que se equivoquen
            if (isNaN(edad)){// Si no es un numero entonces
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
