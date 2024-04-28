import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cart = action.payload;

      const existingItem = state.carts.find((item) => item._id === cart._id);

      if (existingItem) {
        state.carts = state.carts.map((item) =>
          item._id === cart._id
            ? {
              ...item,
              quantity: item.quantity + 1
            }
            : item
        );
      } else {
        state.carts.push({ ...cart, quantity: 1 });
      }
    },

    increment(state, action) {
      const cart = action.payload;
      return {
        ...state,
        carts: state.carts.map((item) =>
          item._id === cart.payload
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        ),
      };
    },
    decrement(state, action) {
      const itemId = action.payload;

      const item = state.carts.find((cartItem) => cartItem._id === itemId);

      if (item && item.quantity > 1) {
        return {
          ...state,
          carts: state.carts.map((cartItem) =>
            cartItem._id === itemId
              ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          carts: state.carts.filter((cartItem) => cartItem._id !== itemId),
        };
      }
    },
    upadteQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload
      state.carts = state.carts.map((item) =>
        item._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
    },

  },
});

export const { addToCart, increment, decrement, upadteQuantity } = cartSlice.actions;

export default cartSlice.reducer;
