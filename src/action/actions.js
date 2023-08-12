export const addItemToCart = (productData) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: productData,
  });
  
  export const incrementQty = (productName) => ({
    type: 'INCREMENT_QTY',
    payload: productName,
  });
  
  export const decrementQty = (productName) => ({
    type: 'DECREMENT_QTY',
    payload: productName,
  });
  