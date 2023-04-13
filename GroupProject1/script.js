const beerContainer = document.querySelector("#beer-container");
const beerName = document.querySelector("#beer-name");
const beerTagline = document.querySelector("#beer-tagline");
const beerImage = document.querySelector("#beer-image");
const NewBeerButton = document.querySelector("#newbeer-button");

async function getRandomBeer() {
  try{
    const response = await fetch("https://api.punkapi.com/v2/beers/random");
  const data = await response.json();
  const beer = data [0];
  return beer;
  }
  catch(error) {
    console.error(error);
}
}

function displayBeer(beer) {
  beerName.textContent = beer.name;
  beerTagline.textContent = beer.tagline;
  beerImage.setAttribute("src", beer.image_url);
}

NewBeerButton.addEventListener("click", async () => {
  try {
    const beer = await getRandomBeer();
    displayBeer(beer); 
  }
catch(error) {
    console.error(error);
}
});

getRandomBeer()
  .then((beer) => {
    displayBeer(beer);
    beerContainer.style.visibility = 'visible';
  })
  .catch(error => {console.error (error)})
