import { IAction } from "./utils/actions-interface";

class Person{
    public name: string;
    private _lastName: string;
    private _age: number;
    // Accesible a las clases que se extienden de ella
    protected _fullName: string;

    constructor(name: string, lastName: string, age: number){
        this.name = name;
        this._lastName = lastName;
        this._age = age;
        this._fullName = `${this.name} ${this._lastName}`;
    }

    walk(): void{
        console.log(`${this.name, this._lastName} esta caminando`);
    }

    talk(): void{
        console.log(`${this.name} esta hablando que tiene "${this._yearBirth()}"`);
    }


    private _yearBirth(){
        const currentDate = new Date();
        const _yearBirth = currentDate.getFullYear() - this._age;
        return  _yearBirth;
    }
}

const Juan = new Person("Juan", "Pablo", 20);

console.log(Juan);
Juan.walk();
Juan.talk();

class Astronauta extends Person implements IAction{

    numberMasterDegress: number;

    constructor(name: string, lastName: string, age: number, numberMasterDegress: number){
        super(name, lastName, age);

        this.numberMasterDegress = numberMasterDegress;
    }

    pilotShip(): void {
        console.log("Pilotea el Eva Shinji")
    }

    getFullName(){
        return this._fullName;
    }
}

const allen = new Astronauta("Allen", "A", 43, 3);

console.log(allen);
console.log(allen.getFullName());

export {};