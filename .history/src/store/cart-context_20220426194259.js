import React, { useReducer } from 'react';

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
   switch(action.type==='ADD'){
       
   }
    if (action.type==='ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount+action.item.price*action.item.amount;
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartState
}
export const CartProvider = props =>{
    const [cartState,dispatchCartAction]=useReducer(cartRuducer,defaultCartState)
    const addItemHandler = item =>{
        //add new item
        //check if item exist, if true, update existing item
        dispatchCartAction({type:'ADD',item:item})

    };
    const removeItemHandler = id =>{
        dispatchCartAction({type:'REMOVE',id:id})

    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler

    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContext