// cartReducer.js

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cartItems: [...state.cartItems, action.payload] };
        case 'UPDATE_CART_ITEM':
            const updatedItem = action.payload;
            return {
                ...state,
                carts: state.carts.map(item =>
                    item._id === updatedItem._id ? { ...item, quantity: updatedItem.quantity } : item
                )
            };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  