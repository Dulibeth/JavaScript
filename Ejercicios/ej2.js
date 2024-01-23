/* Crea una función que genero un numero random, si es mayor que 5 que de error, hazlos con promesas*/

function numeroR(){
    let number = 6;
    return new Promise( (resolve, rejected) => {
        if(number > 5){
            rejected(new Error("Numero es mayor que 5"));
        }
        setTimeout(() => {
            resolve(number);
        }, 1000)
    }
    )}

numeroR()
.then((resolve) => console.log(resolve))
.catch((error) => console.log(error)) 

