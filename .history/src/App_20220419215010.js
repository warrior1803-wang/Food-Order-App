import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import CartContext from "./store/cart-context";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const cartOpenHandler = () => {
    setCartShow(true);
  };
  const cartCloseHandler = () => {
    setCartShow(false);
  };
  return (
  <CartContext>
     {cartShow && <Cart cartShow={cartShow} onClose={cartCloseHandler}></Cart>}
      <Header onOpen={cartOpenHandler}></Header>
      <main>
        <Meals></Meals>
      </main></CartContext>
    
  );
}

export default App;
