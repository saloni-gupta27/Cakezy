export function AuthReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      state = { ...state };
      state.isloggedin = true;
      console.log("state is modified with new data", state);
      return state;
    }
    default:
      return state;
  }
}

export function CakeListReducer(state = { cakes: [] }, action) {
  switch (action.type) {
    case "GET_CAKELIST": {
      state = { ...state };
      state.cakes = action.payload;
      console.log("state is modified with new data", state);
      return state;
    }
    default:
      return state;
  }
}

export function CartReducer(
  state = {
    cartItems: [],
    cartItemQuantity: 0,
  },
  action
) {
  switch (action.type) {
    case "SET_CART_ITEMS": {
      state = { ...state };
      state.cartItems = action.payload;
      state.cartItemQuantity = state.cartItems.length;
      // for (let index = 0; index < state.cartItemCount; index++) {
      //   state.cartItemQuantity += state.cartItems[index].quantity;
      // }
      console.log("state cart is modified with new data", state);
      return state;
    }

    default:
      return state;
  }
}
