const characterName = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, p3] = characterName;

// const [,pt2,] = characterName; // sacando al 2do elemento
const [, pt2] = characterName; // ↑ es lo mismo

// practica desestructurando a Trunks

const [, , trunks] = characterName; // esto no es tan comun porque deja huecos o memorias sin usarse

console.log({ p1, p2, p3 });

console.log({ pt2 });

// console.log(pt2);

console.log({ trunks });


// el uso de const


const returnArrayFn = () => {
    return ['ABC', 123] as const
}

const [letters, numbers] = returnArrayFn();

console.log(numbers + 1);



// tarea de desestructuracion

/* const useState = (name) => {


    return [name, () => {
        console.log(name);
    }] as const;

}



const [name, setName] = useState('Goku');

useState()
 */


