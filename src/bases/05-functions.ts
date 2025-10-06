/**
 * fnc pasale params
 * decir que dato retorna
 * retun obj fnc
 * resumir fnc arrow
 * resumir recorrido array foreach
 */

interface User {
    userid: number;
    name: string;
    age: number;
}

const saludos = (name: string): string => {
    return `Hola ${name}`;
    // return 50; → esto es incorrecto...
};

const saludosR = (name: string) => `Hola ${name}`; // resumir saludos

const getUser = (name: string): User => {
    return {
        userid: 1,
        name: name,
        //age: '5', → esto es incorrecto
        age: 5,
    };
};

const getUser2 = (name: string): User => ({
    userid: 1,
    name: name,
    age: 5,
});
console.log(saludos("Elaine"));

// const usr = getUser(100); → esto es incorrecto, ts no permitirá

const user = getUser("Ana");

console.log({ user });

console.log(saludosR("Elaine"));

console.log(getUser2("Ana Elaine..."));

const arr = [1, 100, 8, 55];

arr.forEach((val, key, arr) => {
    console.log(val, key, arr);
})
