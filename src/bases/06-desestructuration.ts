/**
 * desestructurar obj no importa el orden
 * en el array SI
 * crear node de interface ? opcional
 */

const person = {
    name: "Jhoniel",
    age: 39,
    key: "AXN55",
};

/* const name = person.name;
const age = person.age;
const key = person.key; */

//console.log({name, age, key});

const { name, age, key } = person;

console.log({ name, age, key });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

// formas de desestructurar argumentos en ts I
/* const useContext = (hero: Hero) => {
    const { name, age, key } = hero; // estamos desetructurado dentro de la función

    return { keyName: "ABC", name: name, age: age, key: key };
}; */

/**
 * otra manera de desetructurar en argumentos II
 * desestructurar en el parámetro
 */
const useContext = ({ name, age, key }: Hero) => {
    return {
        keyName: "ABC",
        user: {
            name, // esto es como decir name: name
            age: age,
            key: key,
        },
        key: key,
    };
};

/* const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};
 */
const context = useContext(person);

console.log({ person });
console.log({ context });

/**
 * desestructurar args como obj
 *
 */

console.log(context.user.age);
