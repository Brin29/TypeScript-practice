export  interface ICustomer {
    name: string;
    lastName: string;
    email: string;
    address: {
        description: string;
        city: string;
        country: string;
    };
}

export const showCustomerData = (customer: ICustomer): void => {

    const {
        name, 
        lastName, 
        email, 
        address: { description, city, country } 
    } = customer;

    console.log("Nombre: ", name);
    console.log("Apellido: ", lastName);
    console.log("Email: ", email);

    console.log("----- DIRECCION -----");
    console.log("Descripcion: ", description);
    console.log("Ciudad: ", city);
    console.log("Pais: ", country);
    
    

}