let data = [];
const btn = document.getElementById("add");
const input = document.getElementById("add-task");

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const info = await response.json();
  data = info;

  const todos = document.getElementById("display1");
  data.forEach((todo) => {
    const li = document.createElement("li");
    const status = todo.completed;
    let stat = "";
    if (status) {
      stat = " ---- Completed";
    } else {
      stat = " ---- Not Completed";
    }

    li.textContent = todo.title + stat;
    todos.appendChild(li);
  });

  btn.addEventListener("click", function () {
    const li = document.createElement("li");
    const newInput = input.value;
    if (newInput.trim()) {
      li.textContent = input.value + " ---- Not Completed";
      todos.appendChild(li);
    }
    input.value = "";
  });
}
getData();
