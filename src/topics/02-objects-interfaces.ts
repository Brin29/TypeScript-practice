// Si se necesita mantener ese modelo

// Interfaces
//Es como un contrato que sirve para mantener esos mismos valores
interface IPerson{
    name: string;
    lastName: string;
    age: number;
};

// Herencia de interfaces
interface IStudent extends IPerson{
    career: string;
    university: string;
};

// Objects
const personaje: IPerson = {
    name: "Tony Stark",
    lastName: "",
    age: 19
};

console.log(personaje);

export {};