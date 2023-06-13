import React, { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addToList() {
    if (newTask.trim() !== "") {
      setTask([...task, newTask.trim()]);
      setNewTask("");
    }
  }

  function removeFromList(index) {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  }

  return (
    <>
      <h1>TODO list</h1>
      <div className="App">
        <input
          type="text"
          name="task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addToList}>Add</button>
        <p>Number of tasks: {task.length}</p>
        <ul>
          {task.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeFromList(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
