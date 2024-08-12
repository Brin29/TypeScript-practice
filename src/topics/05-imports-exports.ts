import { ICustomer, showCustomerData } from "./utils/customer-util";

const custo: ICustomer = {
    name: "Breiner",
    lastName: "Parra",
    email: "breinerstivenparracortes50@gmail.com",
    address: {
        description: "valar",
        city: "god",
        country: "brasil"
    }
}

showCustomerData(custo);

export {};