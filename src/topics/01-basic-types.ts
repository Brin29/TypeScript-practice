// numbers, string, boolean, Date ,any

//#region NUMBER

console.log("**********************");
console.log("******* NUMBER *******");
console.log("**********************");  

// TypeScript ya refiere el tipo de dato
let age = 15;

// No se pueden reasignar el tipo de dato
// age = "";

console.log(age);

// Declaracion del tipo de dato
let weight: number;

// Convertir el dato parseInt, parseFloat, Number

const ageText = "19";
parseInt(ageText);

console.log(ageText);


//#endregion

//#region STRING
const name = "Breiner";
console.log(`Mi nombre es: ${name}`);

//#endregion



export {};