let fruta = "manzana";

let usuario = {
    nombre: "Dulibeth",
    edad: 26,
    estudiante: true
}

usuario.carrera = 'gisi';
console.log(usuario.nombre);
console.log(usuario.carrera);

delete usuario.carrera;
console.log(usuario);

console.log(usuario.hasOwnProperty('nombre'));

for(let key in usuario){
    alert(key);
    alert(usuario[key]);
}