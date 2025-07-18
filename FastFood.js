// Acceder a los elementos mediante el ID
let opt = document.getElementById('opt');
let cont = document.getElementById('mobile-cont');

// Función para mostrar/ocultar las opciones del sidebar
function options() {
    // Verifica si el estilo de 'opt' es 'none' (no visible)
    if (opt.style.display == 'none') {
        // Si las opciones no son visibles, las muestra y oculta el contenido
        opt.style.display = 'block';
        cont.style.display = 'none';
    } else {
        // Si las opciones son visibles, las oculta y muestra el contenido
        opt.style.display = 'none';
        cont.style.display = 'grid';
    }
}

// Función para el contenido dependiendo del ancho de pantalla
function restablecer() {
    // Obtiene el ancho de la ventana
    let ancho = window.innerWidth;
    // Verifica si el ancho es mayor que 1200px
    if (ancho > 1200) {
        // Si es mayor que 1200px, oculta 'opt' y 'cont'
        opt.style.display = 'none';
        cont.style.display = 'none';
    } else {
        // Si es menor o igual a 1200px, muestra 'cont'
        cont.style.display = 'grid';
    }
}

// Agrega un evento de cambio de tamaño de ventana que llama a la función 'restablecer'
window.addEventListener('resize', restablecer);

// Se llama la función "restablecer"
restablecer();
