const API_KEY = 'bQdvETqu2HCAPffHVoLpbc7y1y0yPWzT';

// const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`); // tambien es posible hacerlo de esta manera

myRequest
    .then((response) => response.json())
     .then((data) => {
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);

        const imgElement = document.createElement('img')
        imgElement.src = imageUrl

        document.body.append(imgElement)
    })
    .catch( err => {
        console.error(err);
    })

