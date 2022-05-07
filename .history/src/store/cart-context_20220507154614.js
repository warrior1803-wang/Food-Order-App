import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartRuducer = (state, action) => {
  switch (action.type) {
    case "ADD":
        const preStateItems = [...state.items]
        for()
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
     
     
      //concat join arrays
      const updatedItems = state.items.concat(action.item);
      

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      return {};
    default:
      return defaultCartState;
  }
  // if (action.type==='ADD') {

  // }
  // return defaultCartState
};
export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartRuducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    //add new item
    //check if item exist, if true, update existing item
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
