// Si no se pone nada TypeScript interpreta que es de tipo any
const elements = [2, "sassa", false, {name: "julio"}];

console.log(elements);

const message: string[] = ["Breiner", "Stiven"];

console.log(message);


interface IPet {
    name: string,
    age: string,
    species: string,
    isFemale: boolean,
    vaccines: string[]
}

const firulais: IPet = {
    name: "Firulay",
    age: "15 años",
    species: "Perro",
    isFemale: false,
    vaccines: ["Rabia"]
}; 

const kitty: IPet = {
    name: "Kitty",
    age: "8 años",
    species: "Gato",
    isFemale: true,
    vaccines: ["Rabia", "Distremper"]
}; 

const loro: IPet = {
    name: "Lucas",
    age: "8 años",
    species: "Loro",
    isFemale: true,
    vaccines: []
}; 

const pet: IPet[] = [firulais, kitty, loro];

let petsFemale = pet.filter(pets => {
    return pets.isFemale;
})

console.log(petsFemale);
// console.log(pet)

export {};