import { createAction } from "@reduxjs/toolkit";


export const addToCart = createAction("cart/addToCart");
export const removeFromCart = createAction("cart/removeFromCart");
export const modifyQuantityOfAnItem = createAction("cart/modifyQuantityOfAnItem");
export const clearCart = createAction("cart/clearCart");