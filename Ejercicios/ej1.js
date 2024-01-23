/*Ejercicio:

1. Crea una función llamada procesarLista que acepte dos parámetros: una lista de números y un callback.
2. La función debe iterar sobre la lista y aplicar el callback a cada elemento.
3. El callback debe realizar alguna operación en cada elemento, por ejemplo, duplicar el valor, elevar al cuadrado, etc.
4. La función procesarLista debe devolver una nueva lista con los resultados de aplicar el callback a cada elemento.*/

function procesarLista (lista, callback){
    let listaNueva = [];
    for(let i = 0; i < lista.length; i++) {
        let elemento = lista[i];
        elemento = callback(elemento);
        listaNueva.push(elemento);
    }
    console.log(listaNueva);
}

function callback(elemento){
    return elemento + 2;
    
}

listaNumero = [1,2,3,4];

procesarLista(listaNumero, callback);
