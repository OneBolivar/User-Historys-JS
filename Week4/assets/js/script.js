// ==========================================
// 1. CONFIGURACIÓN GLOBAL Y VARIABLES (TASK 4)
// ==========================================
const API_URL = "http://localhost:3000/productos"; // Cambiar por tu URL de JSON Server si aplica
let infoProductos = [];

// Referencias a los elementos del DOM
const formulario = document.getElementById("formulario-producto");
const listaDOM = document.getElementById("lista-productos");
const feedback = document.getElementById("mensaje-feedback");
const btnSincronizar = document.getElementById("btn-sincronizar");

// ==========================================
// 2. INICIALIZACIÓN (TASK 4 - Cargar LocalStorage)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Intentar recuperar datos viejos, si no hay, empieza array vacío
    const datosGuardados = localStorage.getItem("productos_local");
    if (datosGuardados) {
        infoProductos = JSON.parse(datosGuardados);
        renderizarLista();
    }
});

// ==========================================
// 3. CAPTURA Y VALIDACIÓN (TASK 2)
// ==========================================
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Evita que la página se recargue

    // Obtener valores de los inputs
    const nombre = document.getElementById("nombre").value.trim();
    const precio = document.getElementById("precio").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    // Validación de campos vacíos
    if (nombre === "" || precio === "" || descripcion === "") {
        mostrarFeedback("Todos los campos son obligatorios", "error");
        return;
    }

    // Crear el nuevo objeto producto con un ID único
    const nuevoProducto = {
        id: Date.now().toString(), // Genera un ID único temporal basado en tiempo
        nombre: nombre,
        precio: parseFloat(precio),
        descripcion: descripcion
    };

    // Agregar al arreglo global
    infoProductos.push(nuevoProducto);

    // Guardar en LocalStorage y actualizar pantalla
    guardarEnLocalStorage();
    renderizarLista();
    
    // Limpiar formulario y avisar éxito
    formulario.reset();
    mostrarFeedback("Producto agregado localmente", "success");
});

// ==========================================
// 4. MANIPULACIÓN DINÁMICA DEL DOM (TASK 3)
// ==========================================
function renderizarLista() {
    listaDOM.innerHTML = ""; // Limpiar la lista previa

    infoProductos.forEach((producto) => {
        // Crear elemento li
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio} (${producto.descripcion}) `;

        // Crear botón eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        
        // Evento para borrar el elemento al hacer clic
        botonEliminar.addEventListener("click", () => {
            eliminarProducto(producto.id);
        });

        // Adjuntar el botón al li, y el li a la lista (appendChild)
        li.appendChild(botonEliminar);
        listaDOM.appendChild(li);
    });
}

// Función para eliminar lógica y visualmente
function eliminarProducto(id) {
    // Filtrar el arreglo para quitar el producto eliminado
    infoProductos = infoProductos.filter(prod => prod.id !== id);
    
    guardarEnLocalStorage();
    renderizarLista();
    mostrarFeedback("Producto eliminado", "error");
}

// Auxiliar para persistir datos (TASK 4)
function guardarEnLocalStorage() {
    localStorage.setItem("productos_local", JSON.stringify(infoProductos));
}

// Auxiliar para mostrar alertas en el DOM (TASK 2)
function mostrarFeedback(mensaje, tipo) {
    feedback.textContent = mensaje;
    feedback.className = tipo; // Asigna clase CSS 'error' o 'success'
    console.log(`[Feedback]: ${mensaje}`); // Registro en consola para evidencias
}

// ==========================================
// 5. INTEGRACIÓN CON FETCH API / CRUD (TASK 5)
// ==========================================

// Consumo de API: Botón para sincronizar local -> servidor (POST masivo o simulado)
btnSincronizar.addEventListener("click", async () => {
    mostrarFeedback("Sincronizando con el servidor...", "success");
    await consumirAPI_GET(); // Ejemplo de lectura al presionar
});

// GET: Obtener datos de la API
async function consumirAPI_GET() {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error("Error en la respuesta del servidor");
        
        const datosAPI = await respuesta.json();
        console.log("Datos recibidos de la API:", datosAPI);
        mostrarFeedback("Datos de la API cargados en consola", "success");
    } catch (error) {
        console.error("Error Fetch GET:", error);
        mostrarFeedback("No se pudo conectar a la API (Simulado)", "error");
    }
}

// POST: Enviar un nuevo elemento al servidor
async function consumirAPI_POST(nuevoProducto) {
    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoProducto)
        });
        const datos = await respuesta.json();
        console.log("POST Exitoso:", datos);
    } catch (error) {
        console.error("Error Fetch POST:", error);
    }
}
