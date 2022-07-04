import React, { useState } from "react";
import "./App.scss";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.indexOf(item) !== -1)
      return;
    setCart([...cart, item]);
  }

  const handleChange = (item, x) => {
    const id = cart.indexOf(item);
    const arr = cart;
    arr[id].quantity += x;

    if (arr[id].quantity === 0)
      arr[id].quantity = 1;
    
    setCart([...cart]);
  }

  return (
    <>
      <Navbar setShow={setShow}/>
      {show ? <Products addToCart={addToCart}/> : <Cart cart={cart} setCart={setCart}  />}
    </>
  );
}

export default App;
