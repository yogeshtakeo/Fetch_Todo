
    const todoList = document.getElementById('todo-list');
    const todoForm = document.getElementById('todo-form');
    const todoTitle = document.getElementById('todo-title');
    
    // Function to fetch todos
    async function fetchTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const todos = await response.json();
      return todos;
    }
    
    // Function to display todos
    function displayTodos(todos) {
      const todoItems = todos.map(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Not completed'}`;
        return li;
      });
      
      todoList.append(...todoItems);
    }
    
    // Function to add new todo
    function addTodo() {
      const title = todoTitle.value.trim();
      if (title) {
        const todo = {
          userId: 1,
          title,
          completed: false
        };
        
        const li = document.createElement('li');
        li.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Not completed'}`;
        todoList.append(li);
        
        // Clear input
        todoTitle.value = '';
      }
    }
    
    // Fetch and display todos on page load
    fetchTodos().then(todos => displayTodos(todos));
    
    // Add new todo on form submit
    todoForm.addEventListener('submit', event => {
      event.preventDefault();
      addTodo();
    });
  