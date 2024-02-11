
import { createReducer } from "@reduxjs/toolkit";

import { addToCart,removeFromCart,modifyQuantityOfAnItem,clearCart } from "../actions/cart";

export const cartReducer = createReducer([],(builder)=>{
    builder
       .addCase(addToCart,(state,action)=>{
        const product = state.find((item)=>item.id===action.payload.id);

        product ? product.quantity+=1 : state.push({...action.payload,quantity:1})
       })
       .addCase(removeFromCart,(state,action)=>{
           return state.filter((item)=>item.id!==action.payload);
       })
       .addCase(modifyQuantityOfAnItem,(state,action)=>{
          const productIndex = state.findIndex((item)=>item.id===action.payload.id);
          state[productIndex].quantity = action.payload.quantity;
       })
       .addCase(clearCart,(state,action)=>{
         return [];
       })
       .addDefaultCase((state)=>{
        return state;
       })
})










//Raw redux----------------------------------------------------------------

// export const cartReducer = (state=[],action)=>{
//     switch(action.type){
//         case "cart/addToCart":{
//             const product = state.find((item)=> item.id===action.payload.id);

//             return product?
//             state.map((item)=>{
//                 if(item.id === action.payload.id){
//                     return {...item,quantity:item.quantity+1};
//                 }
//             })
//             :[...state,{...action.payload,quantity:1}]
//         }
//         case "cart/removeFromCart":{
//             return state.filter((item)=>item.id!==action.payload.id);
//         }
//         case "cart/modifyQuantityofAnItem":{
//             return state.map((item)=>{
//                 if(item.id === action.payload.id){
//                     return {...item,quantity:action.payload.quantity}
//                 }
//                 return item;
//             });
//         }
//         case "cart/clearCart": {
// 			return [];
// 		}

// 		default: {
// 			return state;
// 		}
//     }
// }