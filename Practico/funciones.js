/*function saludar(){
    console.log("Hola, estoy en la función")
}

saludar();
saludar();
*/

function sumar (num1, num2){
    let resultado;
    resultado = num1+num2;
    console.log(resultado);

}


sumar(1,2);

function foo() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
    
foo('Hola');
foo(1,2,3,4,5,6,7,8,9);

/*let resultado1 = sumar (1,2);
let resultado2 = sumar (3,3);

console.log("Los resultado son: "+ resultado1 + "," + resultado2);*/