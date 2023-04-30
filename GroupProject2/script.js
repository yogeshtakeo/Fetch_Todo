const todoList = document.getElementById("todo-list");
const addTodoForm = document.getElementById("add-todo-form");

let todo = [];
async function fetchTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Error fetching todos", error);
  }
}

function renderTodoList(todo) {
  todoList.innerHTML = "";
  todo.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.title;
    todoList.appendChild(todoItem);
  });
}

async function addTodoItem(event) {
  event.preventDefault();
  const todoTitleInput = document.getElementById("todo-title");
  const todoTitle = todoTitleInput.value;

  todo.push({
    title: todoTitle,
    completed: false,
    userID: 1,
  });

  renderTodoList(todo);
}
async function init() {
  const todos = await fetchTodo();
  renderTodoList(todos);
}

addTodoForm.addEventListener("submit", addTodoItem);
init();
