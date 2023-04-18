const url = "https://www.reddit.com/r/popular.json";
const btn = document.querySelector(".search");
const input = document.querySelector(".input");

let apiData = [];

async function getInfo() {
  const response = await fetch(url);
  const json = await response.json();
  data = json.data.children.map((child) => child.data);

  const posts = document.querySelector(".display-box");
  data.forEach((d) => {
    const li = document.createElement("h2");
    li.textContent = d.title;
    posts.appendChild(li);

    const img = document.createElement("img");
    img.height = 150;
    img.width = 150;
    img.setAttribute("src", d.url);
    img.setAttribute("alt", "Error Loading Image");
    posts.appendChild(img);

    const h1 = document.createElement("h4");

    h1.textContent = "Author: " + d.author;
    posts.appendChild(h1);
  });

  const post2 = document.querySelector(".search-box");
  btn.addEventListener("click", function () {
    document.getElementById("display-box").innerHTML = "";

    const searchData = input.value;
    console.log(searchData);

    data.forEach((d) => {
      const title2 = d.title.trim().toLowerCase();
      if (title2.includes(searchData)) {
        const li = document.createElement("h2");
        li.textContent = d.title;
        post2.appendChild(li);

        const img = document.createElement("img");
        img.height = 150;
        img.width = 150;
        img.setAttribute("src", d.url);
        img.setAttribute("alt", "Error Loading Image");
        post2.appendChild(img);

        const h1 = document.createElement("h4");

        h1.textContent = "Author: " + d.author;
        post2.appendChild(h1);
      }
    });
  });
}

getInfo();
