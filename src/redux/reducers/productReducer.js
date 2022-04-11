import { ActionTypes } from "../constans/action-types";

const initialState = {
  products: [],
  cart: [
    {
      title: "Mens Casual Slim Fit",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      id: 4,
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };

    default:
      return state;
  }
};
