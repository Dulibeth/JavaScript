/*var respuesta = window.prompt("Estas feliz?", "Si, mas o menos");
alert("Su respuesta fue: " + respuesta);*/

//Ventana de confirmación
var confirmacion = window.confirm("Estas feliz?");
if(confirmacion == true) {
    alert("Que bien");
}
else{
    alert("Que mal");
}

console.log("Gracias a ti".split(""));