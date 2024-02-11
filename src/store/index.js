import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const cartReducer = (state = [], action) => {
	switch (action.type) {
		case "cart/addToCart": {
			const product = state.find((item) => item.id === action.payload.id);

			return product
				? state.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, quantity: item.quantity + 1 };
						}

						return item;
				  })
				: [...state, { ...action.payload, quantity: 1 }];
		}

		case "cart/removeFromCart": {
			return state.filter((item) => item.id !== action.payload);
		}

		case "cart/modifyQuantityOfAnItem": {
			return state.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, quantity: action.payload.quantity };
				}

				return item;
			});
		}

		case "cart/clearCart": {
			return [];
		}

		default: {
			return state;
		}
	}
};

const rootReducer = combineReducers({
	cart: cartReducer,
    
	
});

export const store = createStore(rootReducer, composeWithDevTools());
