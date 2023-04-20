import React, { useState } from "react";
import "./index.css";
function App() {
  
  const [data,setData] =useState([
    
    {
      
      name:"Apple",
      where:"walmart",
      price:1,
      image:"https://rainierfruit.com/wp-content/uploads/2021/12/Rainier-Fruit-Apple.png",
      quantity:0
    },
    {
      name:"Mango",
      where:"Bazar",
      price:1.5,
      image:"https://images.heb.com/is/image/HEBGrocery/001668455?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
      quantity:0
    },
    {
      name:"Pear",
      where:"Bazar",
      price:2,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIBuOCHGZw-mf0uKXjUobM896ySr1CtLoVz8h2ghdlm4Du-5CuD3_Ey2r3x2Q2T0F6QgULWxJdp4&usqp=CAU&ec=48600112",
      quantity:0
    }
  ])

  function increase(index) {
  let wholeData = data
  wholeData[index].quantity++;
  console.log(wholeData)  
  setData([...wholeData]) 
  }
  function decrease(index) {
    let wholeData = data
  wholeData[index].quantity--;
  console.log(wholeData)  
  setData([...wholeData])
  }
  function remove(index) {
    let wholeData = data
    wholeData[index].quantity=0;
    console.log(wholeData)  
    setData([...wholeData])
  }


  const getPrice= () =>{
    const priceArray = data.map((product,index)=>product.price * product.quantity)
    let price = 0;
    for(let i= 0 ; i<priceArray.length;i++){
      price +=priceArray[i]
    }
    console.log(price)
    return price;
  }
 
  return (
    <div>
      <h1>Welcome to my store!</h1>
      <h2>Shopping Cart</h2>
      <p>Number of Items in ShopingCart</p>
      <h1> {data.length} </h1>;<p>Total price of Items in $</p>
      <h1> {getPrice()}</h1>;
      <table>
        
        {data.map((products,index)=>{
          return (<tr>
          <td>{products.name}</td>
          <td>${products.price}</td>
          <td>{products.where}</td>
          <td><img src={products.image} height="100px"/></td>
          <button onClick={()=>increase(index)}>+</button>
            <p>{products.quantity}</p>
          <button onClick={()=>decrease(index)}>-</button>
          <button onClick={()=>(remove(index))}>Remove</button>
        </tr>)
        })}
       
      </table>
    </div>
  );
}

export default App;


