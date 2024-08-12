console.log("************************")
// Funcion retorna un valor
function suma(a: number, b: number){
    return a + b
}

console.log(suma(1,6));

// Metodo no retorna nada
function showMessage(name: string): void{
    console.log(`Hello ${name}`);
}

showMessage("Breiner");

export {};