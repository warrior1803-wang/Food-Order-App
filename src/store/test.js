const cartReducer = (state, action) =>{
 
  if(action.type === 'ADD'){
      const mergedItems = state.items.filter(item =>{
          return action.item.id !== item.id
      });
      const updatedItems = mergedItems.concat(action.item);
      const updateTotalAmount = updatedItems.reduce((prevValue, item) =>{
          return prevValue + (item.amount * item.price);
      }, 0); 
      console.log(updatedItems, updateTotalAmount)
      return{
          items: updatedItems,
          totalAmount: updateTotalAmount,
      };
  }
  return defaultCartState;
};