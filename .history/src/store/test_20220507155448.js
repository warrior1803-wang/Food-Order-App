if (action.type === 'ADD_ITEM') {
    const prevStateItems = [...state.items];
    for (const item of prevStateItems) {
      if (item.id === action.item.id) {
        item.amount += action.item.amount;
        const updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.amount;
        const updatedItems = prevStateItems;
        return { items: updatedItems, totalAmount: updatedTotalAmount };
      }
    }
    
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } 