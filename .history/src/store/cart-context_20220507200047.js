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
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        //newest added item
        // console.log(updatedItem);
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        // console.log(updatedItems);
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
        const removedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
          
      };
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
