import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const cartOpenHandler = () => {
    setCartShow(true);
  };
  const cartCloseHandler = () => {
    setCartShow(false);
  };
  return (
  <CartProvider>
     {cartShow && <Cart cartShow={cartShow} onClose={cartCloseHandler}></Cart>}
      <Header onOpen={cartOpenHandler}></Header>
      <main>
        <Meals></Meals>
      </main></CartProvider>
    
  );
}

export default App;
