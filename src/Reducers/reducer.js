const initialState = {
    cardItem: [],
    qty: {},
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
     
      case 'ADD_ITEM_TO_CART':
        const productData = action.payload; 
        const updatedQty = {
          ...state.qty,
          [productData.name]: (state.qty[productData.name] || 0) + 1,
        };
        return {
          ...state,
          cardItem: [...state.cardItem, productData],
          qty: updatedQty,
        };
  
      case 'INCREMENT_QTY':
        return {
          ...state,
          qty: {
            ...state.qty,
            [action.payload]: state.qty[action.payload] + 1,
          },
        };
  
      case 'DECREMENT_QTY':
        if (state.qty[action.payload] > 1) {
          return {
            ...state,
            qty: {
              ...state.qty,
              [action.payload]: state.qty[action.payload] - 1,
            },
          };
        }
        return state;
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  