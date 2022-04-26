import React, { useReducer } from 'react'

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
});
const defaultCartState = {
    items:[],
    totalAmount:0
}
const cartRuducer = (state,action)=>{
    return defaultCartState
}
export const CartProvider = props =>{
    const [cartState,dispatchCartAction]=useReducer(cartRuducer,defaultCartState)
    const addItemHandler = item =>{
        //add new item
        //check if item exist, if true, update existing item
        dispatchCartAction({type})

    };
    const removeItemHandler = id =>{}
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:(item)=>{},
        removeItem:(id)=>{}

    }
    return(
        <CartContext.Provider addItem={addItemHandler} removeItem={removeItemHandler}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext