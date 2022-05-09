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
const Actions = {
    add_Item: "ADD",
    remove_Item :"REMOVE"
}
const cartRuducer = (state, action) => {
  switch (action.type) {
    case Actions.add_Item:
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
//false 会返回-1 true就会返回index
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
console.log(existingCartItemIndex);
      const existingCartItem = state.items[existingCartItemIndex];
      console.log(existingCartItem);
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
    case Actions.remove_Item:
        const existingCartItemIndexRemove = state.items.findIndex(
            (item) => item.id === action.item.id
          );
          const existingItemRemove = state.items[existingCartItemIndexRemove]
          const updatedTotalAmountRemove = state.totalAmount-existingItemRemove.price;
          let updatedItemsRemove;
          if (existingItemRemove.amount===1) {
              
          }



      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
          
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
    dispatchCartAction({ type: Actions.add_Item, item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: Actions.remove_Item, id: id });
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
