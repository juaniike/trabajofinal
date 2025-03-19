/*Función para abrir el menú de navegación móvil*/
function openNav() {
    /*Obtiene el elemento con el ID "mobile-menu" y establece su ancho al 100%
    Esto hace que el menú ocupe toda la pantalla*/
    document.getElementById("mobile-menu").style.width = "100%"; // Muestra el menú
}

/*Función para cerrar el menú de navegación móvil*/
function closeNav() {
    /*Obtiene el elemento con el ID "mobile-menu" y reduce su ancho a 0
    Esto oculta el menú de la vista*/
    document.getElementById("mobile-menu").style.width = "0"; // Oculta el menú
}