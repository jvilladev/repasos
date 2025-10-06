// spreed y structured clone en array
// agregarle tipo dato, en array
// no deje que ts infiera

const ages: number[] = [1, 5, 10, 31]; // NO debo colocar otro que no sea number

console.log({ ages });

const copyAges = ages; // → nunca copiar de esta manera

copyAges.push(75);

console.log({ ages });
console.log({ copyAges });

// forma correcta de copiar

const copyAgesOk = [...ages];

copyAges.push(100);

console.log({ copyAges });
console.log({ copyAgesOk });
