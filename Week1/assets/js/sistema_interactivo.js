//Ejecución de los comandos (generales) al cargar la página
let nombre =  prompt("Ingrese su nombre:")/*El "prompt" sirve para pedir un dato en js*/
let Confirmar = confirm("¿Desea continuar?")/*El "confirm" sirve para pedir una confirmacion en js, devuelve un valor booleano (true o false) dependiendo de la respuesta del usuario*/
if (Confirmar) {
    alert("Hola" + " " + nombre + " " + "¡Gracias por continuar!")/*El "alert" sirve para mostrar un mensaje en js*/
}
else {
    alert("Hola" + " " + nombre + " " + "¡Gracias por su visita!")/*El "alert" sirve para mostrar un mensaje en js*/
    window.close()/*El "window.close()" sirve para cerrar la ventana del navegador, pero solo funciona si la ventana fue abierta por un script, no funcionará si el usuario abrió la página directamente*/
}

//------------------------------------------------------------------------------------------------------------------------------------------
//Funciones para el menu (general)
function desplegar() {

    let menu = document.getElementsByClassName("links")//Variable para traer el menu del html(en este caso se llama links)
    let boton = document.getElementsByClassName("boton-menu")//Variable para traer el boton del html(en este caso se llama boton-menu)
    //Si el menu esta activo se muestra la X y si no lo esta se muestra el simbolo de las tres rayas
    if (menu[0].classList.contains("active")) {
        boton[0].innerText = "≡";


        
    }
    else {
        boton[0].innerText = "X";
    }
    //El metodo toggle se encarga de agregar o quitar la clase active dependiendo de si esta o no esta en el elemento
    menu[0].classList.toggle("active")

}
//------------------------------------------------------------------------------------------------------------------------------------------
//Funciones para el boton de "Ver mas" en la seccion de informacion adicional (pagina pets.html)
function verMas() {
    let boton = document.getElementsByClassName("boton-ver-mas");
    let info = document.getElementsByClassName("Info-extra");
    //Si el boton esta activo se muestra el texto "Ver mas" y si no lo esta se muestra el texto "Ver menos"
    boton[0].classList.toggle("active")
    info[0].classList.toggle("active")
    if (boton[0].classList.contains("active")) {
        boton[0].innerText = "Ver menos";

    }
    else {
        boton[0].innerText = "Ver más";
    }
    //El metodo toggle se encarga de agregar o quitar la clase active dependiendo de si esta o no esta en el elemento

}
//------------------------------------------------------------------------------------------------------------------------------------------
//Funciones para el boton de "Ver mas" en la seccion de mascotas (pagina pets.html)
function nombres() {
    let boton = document.getElementsByClassName("boton-ver-mas");
    let nombre = document.getElementsByClassName("Nombres");
    //Si el boton esta activo se muestra el texto "Ver mas" y si no lo esta se muestra el texto "Ver menos"
    boton[0].classList.toggle("active")
    for (let index = 0; index < nombre.length; index++) {
        const element = nombre[index];
        element.classList.toggle("active")
    }

}
//------------------------------------------------------------------------------------------------------------------------------------------