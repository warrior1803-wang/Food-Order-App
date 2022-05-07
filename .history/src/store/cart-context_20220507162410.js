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
//       const prevStateItems = [...state.items];
//       console.log(prevStateItems)
//       for (const item of prevStateItems) {
//         if (item.id === action.item.id) {
//             console.log(item.amount,action.item.amount)
//           item.amount = item.amount+ action.item.amount;
//           console.log(item.amount)
//           const updatedTotalAmount =
//             state.totalAmount + action.item.price * action.item.amount;
//           const updatedItems = prevStateItems;
//           return { items: updatedItems, totalAmount: updatedTotalAmount };
//         }
//       }
// //join arrays
//       const updatedItems = state.items.concat(action.item);
//       const updatedTotalAmount =
//         state.totalAmount + action.item.price * action.item.amount;

//       return { items: updatedItems, totalAmount: updatedTotalAmount };
const mergedItems = state.items.filter(item =>{
    return action.item.id !== item.id
});

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
