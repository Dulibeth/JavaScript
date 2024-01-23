let frutas = ["naranja", "manzana", "piña"];
frutas.push("uva");
console.log(frutas);

frutas.pop();
frutas.shift();
frutas.unshift("melocotón");
frutas.reverse();
console.log(frutas);

let frutasConM = frutas.filter(fruta => fruta.includes("m"));
console.log(frutasConM);


