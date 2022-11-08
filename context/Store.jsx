import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
 export const Store = createContext();

 const initialState = {
    cart: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : { cartItems: [] },
 };

 function reducer( state, action){
    switch (action.type){
        case 'CART_ADD_ITEM': {
          const newItem = action.payload;
          const existItem = state.cart.cartItems.find(
            (food) => food.id === newItem.id
          );
            const cartItems = existItem
            ? state.cart.cartItems.map((food) =>
                food.name === existItem.name ? newItem : food
              )
            : [...state.cart.cartItems, newItem];
            Cookies.set('cart', JSON.stringify({  ...state.cart ,cartItems }));
          return { ...state, cart: { cartItems } };
        }
        case 'CART_REMOVE_ITEM': {
          const cartItems = state.cart.cartItems.filter(
            (food) => food.id !== action.payload.id
          );
          Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
          return { ...state, cart: {...state.cart,  cartItems } };
        };
        case 'CART_RESET':
          return {
            ...state,
            cart: {
              cartItems: [],
              shippingAddress: {location: {}},
              paymentMethod: '',

            },
          }
                
        default:
            return state;
    }
}

    export function StoreProvider({children}) {
        const [state, dispatch] = useReducer(reducer, initialState);
        const value = { state, dispatch };
        return <Store.Provider value={value}>{children}</Store.Provider>;
      }