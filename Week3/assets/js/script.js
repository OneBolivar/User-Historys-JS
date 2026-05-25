// TASK 2: Selección e inspección
const inputNota = document.getElementById('inputNota');
const btnAgregar = document.getElementById('btnAgregar');
const listaNotas = document.querySelector('#listaNotas');

// Loggeo en consola para confirmar existencia
console.log("Elemento Input:", inputNota);
console.log("Elemento Botón:", btnAgregar);
console.log("Elemento Lista UL:", listaNotas);


// TASK 3: Agregar notas al DOM
btnAgregar.addEventListener('click', function() {
    const textoNota = inputNota.value.trim();

    // 1. Validación de input vacío
    if (textoNota === "") {
        alert("Por favor, escribe algo. La nota no puede estar vacía.");
        return; // Detiene la ejecución si está vacío
    }

    // 2. Creación del elemento LI y su texto
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = textoNota + " "; // Agrega el texto de la nota

    // 3. Creación del botón "Eliminar" integrado
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    
    // Funcionalidad extra: eliminar la nota al hacer clic en su botón
    btnEliminar.addEventListener('click', function() {
        listaNotas.removeChild(nuevoLi);
        console.log("Nota eliminada del DOM.");
    });

    // 4. Insertar el botón dentro del LI, y el LI dentro de la UL
    nuevoLi.appendChild(btnEliminar);
    listaNotas.appendChild(nuevoLi);

    // 5. Limpieza y enfoque
    inputNota.value = "";
    inputNota.focus();

    // 6. Confirmación en consola
    console.log(`Nota agregada con éxito: "${textoNota}"`);
});
