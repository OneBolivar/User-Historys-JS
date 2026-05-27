// =========================================================================
// ESTRUCTURACIÓN LÓGICA - GESTIÓN DE PRODUCTOS CON API (SPA / DOM)
// =========================================================================

// CONFIGURACIÓN DE LA API (URL base para el consumo del servidor)
const API_URL = "http://localhost:3000/productos"; 

// Arreglo global que actúa como base de datos en memoria (Estado de la SPA)
let infoProductos = [];

// 1. REFERENCIAS UNIFICADAS AL DOM (Nodos del HTML)
const formulario = document.getElementById("formulario-producto");
const listaDOM = document.getElementById("lista-productos");
const feedback = document.getElementById("contenedor-mensaje");
const btnSincronizar = document.getElementById("btn-sincronizar");

// Captura directa de los componentes de entrada de datos
const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const inputCantidad = document.getElementById("cantidad");

// =========================================================================
// 2. INICIALIZACIÓN DE LA APLICACIÓN (Cargar LocalStorage)
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const datosGuardados = localStorage.getItem("productos_local");
    if (datosGuardados) {
        // Transformamos la cadena de texto JSON de vuelta a un arreglo de objetos
        infoProductos = JSON.parse(datosGuardados);
        renderizarLista();
    }
});

// =========================================================================
// 3. CAPTURA Y VALIDACIÓN DE DATOS (Evento Submit)
// =========================================================================
formulario.addEventListener("submit", (evento) => {
    // REQUISITO CRUCIAL SPA: Detiene el refresco de pantalla por defecto del navegador
    evento.preventDefault(); 

    // Obtención de valores limpiando espacios en blanco en los extremos
    const nombre = inputNombre.value.trim();
    const precio = inputPrecio.value.trim();
    const cantidad = inputCantidad.value.trim();

    // Regla de validación: Impedir campos vacíos
    if (nombre === "" || precio === "" || cantidad === "") {
        mostrarFeedback("Todos los campos son obligatorios", "error");
        return; // Interrumpe el flujo del código
    }

    // Regla de validación: Números mayores a cero
    if (parseFloat(precio) <= 0 || parseInt(cantidad) <= 0) {
        mostrarFeedback("El precio y la cantidad deben ser mayores a cero", "error");
        return;
    }

    // Estructuración de la entidad producto con ID único temporal por milisegundos
    const nuevoProducto = {
        id: Date.now().toString(), 
        nombre: nombre,
        precio: parseFloat(precio).toFixed(2), // Asegura dos decimales en el precio
        cantidad: parseInt(cantidad)
    };

    // Actualización del estado global de datos
    infoProductos.push(nuevoProducto);

    // Persistencia local y renderizado en pantalla
    guardarEnLocalStorage();
    renderizarLista();
    
    // Reseteo de campos y notificación de éxito
    formulario.reset();
    mostrarFeedback("Producto agregado localmente con éxito", "exito");
});

// =========================================================================
// 4. MANIPULACIÓN DINÁMICA DEL DOM (Renderizado e Inyección)
// =========================================================================
function renderizarLista() {
    // Limpieza total del contenedor para evitar la duplicación visual de filas
    listaDOM.innerHTML = ""; 

    infoProductos.forEach((producto) => {
        // Creación del nodo contenedor de la fila (<li>)
        const li = document.createElement("li");
        
        // Estructuración del contenido textual del elemento
        li.textContent = `${producto.nombre} - $${producto.precio} (Cant: ${producto.cantidad}) `;

        // Creación del botón interactivo para el borrado
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        
        // Escuchador de eventos enlazado directamente al ID del producto iterado
        botonEliminar.addEventListener("click", () => {
            eliminarProducto(producto.id);
        });

        // Ensamblado jerárquico de nodos en el árbol del DOM
        li.appendChild(botonEliminar);
        listaDOM.appendChild(li);
    });
}

// Remueve el objeto de la lógica de datos y de la persistencia
function eliminarProducto(id) {
    infoProductos = infoProductos.filter(prod => prod.id !== id);
    
    guardarEnLocalStorage();
    renderizarLista();
    mostrarFeedback("Producto eliminado correctamente", "error");
}

// =========================================================================
// 5. INTEGRACIÓN ASÍNCRONA CON FETCH API (TASK 5)
// =========================================================================

// Evento que desencadena el envío de la cola local de productos hacia el servidor
btnSincronizar.addEventListener("click", async () => {
    if (infoProductos.length === 0) {
        mostrarFeedback("No hay productos locales para sincronizar", "error");
        return;
    }

    mostrarFeedback("Sincronizando con el servidor...", "exito");

    // Recorrido asíncrono secuencial mediante bucle for...of para el manejo del fetch
    for (const producto of infoProductos) {
        await enviarProductoA_API(producto);
    }

    mostrarFeedback("¡Todos los productos han sido subidos al servidor API!", "exito");
});

// Petición HTTP POST asíncrona mediante async/await
async function enviarProductoA_API(producto) {
    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto) // Serialización obligatoria a JSON
        });

        if (!respuesta.ok) {
            throw new Error(`Error en el servidor: ${respuesta.status}`);
        }

        const datosServidor = await respuesta.json();
        console.log("Sincronizado con éxito en la API:", datosServidor);

    } catch (error) {
        console.error("Error al conectar con la API:", error);
        mostrarFeedback("Fallo de conexión con la API (Revisa la consola)", "error");
    }
}

// =========================================================================
// 6. FUNCIONES AUXILIARES (Persistencia y Alertas)
// =========================================================================

// Serializa la colección de datos a formato de texto para almacenarlo
function guardarEnLocalStorage() {
    localStorage.setItem("productos_local", JSON.stringify(infoProductos));
}

// Controla los mensajes en pantalla aplicando las clases exactas del CSS
function mostrarFeedback(mensaje, tipoClase) {
    feedback.textContent = mensaje;
    // Sobrescribe el atributo class para activar las reglas .exito o .error del CSS
    feedback.className = tipoClase; 
    
    // Registro de evidencia en consola solicitado en la rúbrica del taller
    console.log(`[EVIDENCIA PRUEBA]: ${mensaje}`);
}
