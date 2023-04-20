import React, { useState } from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.calories} Calories/serving</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

function ShoppingCart({ cartItems, updateQuantity, removeFromCart }) {
  return (
    <div className="shopping-cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.calories} Calories </p>
            <p>${item.price}</p>
          </div>
          <div className="quantity">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

function Counter({ count, total }) {
  return (
    <div className="counter">
      <p>Total items: {count}</p>
      <p>Total cost: ${total}</p>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apples",
      price: 2.99,
      calories: 95,
      image:
        "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
    },
    {
      id: 2,
      name: "Bananas",
      price: 1.99,
      calories: 105,
      image:
        "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=",
    },
    {
      id: 3,
      name: "Carrots",
      price: 0.99,
      calories: 30,
      image:
        "https://media.istockphoto.com/id/619252960/photo/carrot.jpg?s=612x612&w=0&k=20&c=C-PlZ2oHW2SDCkaZXn8rg1UFdeF5ismwiy3v7uQRVKE=",
    },
    {
      id: 4,
      name: "Broccoli",
      price: 1.49,
      calories: 55,
      image:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250__480.jpg",
    },
    {
      id: 5,
      name: "Milk",
      price: 2.59,
      calories: 120,
      image:
        "https://target.scene7.com/is/image/Target/GUEST_e78988d0-0101-42e3-94e5-6ef8fa706840?wid=573&hei=573&qlt=80&fmt=webp",
    },
    {
      id: 6,
      name: "Eggs",
      price: 3.49,
      calories: 70,
      image:
        "https://media.istockphoto.com/id/1028690210/photo/set-of-egg-isolated.jpg?s=612x612&w=0&k=20&c=Twc1V5iG4XmGT-_6JQ7Wqejk19D_sK6OI84sxTs8W7U=",
    },
    {
      id: 7,
      name: "Bread",
      price: 2.99,
      calories: 80,
      image: "https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg",
    },
    {
      id: 8,
      name: "Cheese",
      price: 4.99,
      calories: 110,
      image:
        "https://media.istockphoto.com/id/1127471287/photo/cheese-on-white.jpg?s=612x612&w=0&k=20&c=m8kJAfayGrBoqKceiwGAq7SaEDrbZCyPzklYOm3_MBk=",
    },
    {
      id: 9,
      name: "Chicken breast",
      price: 6.99,
      calories: 165,
      image:
        "https://media.istockphoto.com/id/1013722252/photo/grilled-or-smoked-chicken-breast-with-bone-and-skin.jpg?s=612x612&w=0&k=20&c=uIzubW7L_lHg0FoCwyqSCzy8eZcRcIpqzcNUEDuLECA=",
    },
    {
      id: 10,
      name: "Ground beef",
      price: 4.99,
      calories: 250,
      image:
        "https://media.istockphoto.com/id/907849968/photo/mince-ground-meat-with-ingredients-for-cooking-on-black-background-top-view.jpg?s=612x612&w=0&k=20&c=FskfsHJZHl8w6V6tjSsxqSzaRj-aTGqLqLptxvGPvlU=",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(newCartItems.filter((item) => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const count = cartItems.reduce((total, item) => total + item.quantity, 0);
  const total = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="App">
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <Counter count={count} total={total} />
    </div>
  );
}

export default App;
