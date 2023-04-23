import { useState } from "react";
import Data from "./items";
import Navbar from "./navbar";

function Shop() {
  const [cartItems, setCartItems] = useState([]);

  function addShoes(itemId) {
    const productToAdd = Data.find((product) => product.id === itemId);
    const existingCartItem = cartItems.find(
      (item) => item.product.id === itemId
    );

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.product.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product: productToAdd, quantity: 1 }]);
    }
  }

  function increaseItem(itemId) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  function decreaseItem(itemId) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product.id === itemId && item.quantity >= 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="bg-indigo-50">
        <br></br>
        <br></br>
        <br></br>
        <p className="text-6xl font-bold leading-normal mt-0 mb-0 text-pink-800 space-y-[5px]">
          Shoes
        </p>
        <ul className="inline-grid gap-20 grid-cols-3 grid-rows-4">
          {Data.map((product) => (
            <li key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                width={250}
                height={250}
              />
              <span>
                {product.name} <br></br>${product.price} <br></br>
              </span>
              <button
                onClick={() => addShoes(product.id)}
                style={{ backgroundColor: "blue", color: "white" }}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>

        <ul className="box-border w-1/3 p-4 border-4 border-teal-400 bg-teal-200">
          <p className="font-bold">Shopping Cart</p>
          {cartItems.map((item) => (
            <li key={item.product.id} className="font-bold space-y-3 space-x-2">
              <span>{item.product.name}</span>

              <button
                className="px-0.25 py-0.25 w-5 bg-red-600 text-white"
                onClick={() => decreaseItem(item.product.id)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-0.25 py-0.25 w-5 text-white bg-green-400"
                onClick={() => increaseItem(item.product.id)}
              >
                +
              </button>
              <span>${item.product.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice}</p>
        </div>
      </div>
    </>
  );
}

export default Shop;
