const array1 = [1,5,2,9,1];
const array2 = ["a", "b", "c"];

const getFirstTime = <T>(array: T[]) => {
    return array[0];
}


getFirstTime<string>(array2);
getFirstTime (array1);

export {};