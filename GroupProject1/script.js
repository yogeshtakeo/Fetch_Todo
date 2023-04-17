const url = "https://api.punkapi.com/v2/beers/random";
const beerN = document.querySelector(".name");
const tagline = document.querySelector(".tagline");
const image = document.querySelector(".image");
const btn = document.querySelector(".random");

function randomBeer() {
  async function getBeerInfo() {
    const response = await fetch(url);
    const data = await response.json();
    const beer = data[0];
    //console.log(beer);
    return beer;
  }

  getBeerInfo().then((beer) => {
    const name = beer.name;
    beerN.textContent = beer.name;
    image.setAttribute("src", beer.image_url);
    tagline.textContent = beer.tagline;
  });
}
randomBeer();

btn.addEventListener("click", function () {
  randomBeer();
});
