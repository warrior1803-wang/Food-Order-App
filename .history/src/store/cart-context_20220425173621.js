import React, { useReducer } from 'react'

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:()=>{},
    removeItem:(id)=>{}
});
const defaultCartState = {
    
}
const cartRuducer = (state,action)=>{
    return 
}
export const CartProvider = props =>{
    const addItemHandler = item =>{
        //add new item
        //check if item exist, if true, update existing item


    };
    const removeItemHandler = id =>{}
    return(
        <CartContext.Provider addItem={addItemHandler} removeItem={removeItemHandler}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContext