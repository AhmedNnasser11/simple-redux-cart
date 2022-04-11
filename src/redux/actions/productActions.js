import { ActionTypes } from "../constans/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const addToCart = (products) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: products,
    }
}