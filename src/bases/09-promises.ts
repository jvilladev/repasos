
// esta es la estructura básica para una promesa
/**
 * <string> es un tipo genérico de ts
 * 
 */
const myPromise = new Promise<string>( (resolve, reject) => {
    setTimeout(() => {
        resolve('This is OK..')
        //resolve(100)
        //reject('Error in promises')
    }, 3000);
})

myPromise.then((msg) => {
    console.log(`message this, ${msg}`);
    
}).catch((err) => {
    console.error(`error sale ${err}`);
}).finally(() => {
    console.log('hemos finalizado la prueba I');
})

// forma donde es mas fácil ver el comportamiento de los resolve y los reject
 const myPromise2 = new Promise<string> ( (resolve, reject) => {
    const success = false; 

    setTimeout(() => {
        
        if(success){
            resolve('todo OK')
        }

        else{
            reject('ha ocurrido un error');
        }
    }, 3000);

 })

console.log('***************** Esta es la segunda prueba *****************');

 myPromise2.then((msg) => { // no se recomienda asignarlo aca
    console.log(`resultado: ${msg}`);
 }).catch((err) => {
    console.error(`resultado: ${err}`);
 }).finally(() => {
    console.log('Hemos finalizado la prueba..');
 })