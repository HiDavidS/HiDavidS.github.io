
//Boton "Ir arriba"
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    }else {
        myButton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Ventana emergente de btn CV
function myCV() {
    window.alert("Descarga exitosa!")
}
//Cambiar color de fondo
function myFunction() {
    var element = document.body;
    element.classList.toggle("white-mode");
}


