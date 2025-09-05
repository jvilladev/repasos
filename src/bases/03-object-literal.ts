const nameUser = 'admin';

const user = {
    name: "Jhoniel",
    age: 38,
    password: "Panama123*"
}

console.log({ nameUser });

console.log(user);

user.name = 'Ana';

console.log(user);

/**
 * Esta no hace una copia esta mal
 */

const userCopy = user;

console.log({ userCopy });

userCopy.password = 'NuevoPassword';


console.log({ user }); // supuestamente le queriamos cambiar solo al objeto userCopy

/**
 * Forma correcta de clonar es con un spreed
 */

const userCopy2 = { ...user };

console.log({ userCopy2 });

userCopy2.name = 'name Copy2r'

console.log({ userCopy2 });

/**
 * copias con structuredClone
 */


const client = {
    firstName: 'Fernando',
    lastName: 'Herrera',
    age: 30,
    address: {
        country: 'Costa Rica',
        street: 'Calla 50, FT',
        ave: 50
    }
}

console.log({ client });

const clientCopy = { ...client };

console.log({ clientCopy });

clientCopy.firstName = 'FH'

console.log({ clientCopy });
console.log({ client });

clientCopy.address.ave = 100;
console.log({ client });


// forma correcta con structuredClone
const clientCopyCorrect = structuredClone(client);

clientCopyCorrect.address.ave = 200;

console.log({ client });
console.log({ clientCopyCorrect });









