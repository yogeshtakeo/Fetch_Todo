const API_URL = "https://www.reddit.com/r/popular.json";

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json.data.children.map((child) => child.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function displayPosts(posts) {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;
    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${post.author}`;
    const imageElement = document.createElement("img");
    if (
      post.thumbnail &&
      post.thumbnail !== "self" &&
      post.thumbnail !== "default"
    ) {
      imageElement.src = post.thumbnail;
    } else {
      imageElement.style.display = "none";
    }
    postElement.appendChild(titleElement);
    postElement.appendChild(authorElement);
    postElement.appendChild(imageElement);
    container.appendChild(postElement);
  });
}

function filterPosts(posts, query) {
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.author.toLowerCase().includes(query.toLowerCase())
  );
}

async function init() {
  const allPosts = await fetchPosts();
  displayPosts(allPosts);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("search-input");
    const query = input.value.trim();
    const filteredPosts = filterPosts(allPosts, query);
    displayPosts(filteredPosts);
  });
}

init();
