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
    // La interrogante hace que la interfaz sea opcional
    university?: string;
};

// Objects
const personaje: IPerson = {
    name: "Tony Stark",
    lastName: "",
    age: 19
};

const student: IStudent = {
    name: "Breiner",
    lastName: "Parra",
    age: 20,
    career: "Garcia Marquez",
    university: "Los santos"
}

console.log(personaje);
console.log(student);

export {};