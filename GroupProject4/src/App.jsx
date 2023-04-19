<<<<<<< HEAD
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
    <div className="App">
      <input
        type="text"
        name="task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button onClick={addToList}>Add</button>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromList(index)}>Remove</button>
          </li>
        ))}
      </ul>
=======
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  function submit() {
    setCount(count + 1);
    setPrice(price + 50);
  }
  function click() {
    setCount(count - 1);
    setPrice(price - 50);
  }
  function reset() {
    setCount(count * 0);
    setPrice(price * 0);
  }

  function addToCart() {
    setCount(count + 1);
    setPrice(price + 50);
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={submit}>Increment</button>
      <button onClick={click}>Decrease</button>
      <button onClick={reset}>reset</button>
      <p>Number of Items in ShopingCart</p>
      <h1> {count} </h1>;<p>Total price of Items in $</p>
      <h1>{price} </h1>;<h2>list of product</h2>
      <h2>A shopping cart table</h2>
      <table>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>description</th>
        </tr>
        <tr>
          <td>Lollipop</td>
          <td>$50</td>
          <td>WALMART</td>
        </tr>
      </table>
      <button onClick={addToCart}>AddToCart</button>
>>>>>>> master
    </div>
  );
}

export default App;
