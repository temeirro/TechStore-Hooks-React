import React, { createContext, useState, useReducer } from "react"

export const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const initialState = {
    products: [
      { id: 1, name: "IPhone 15 Pro Max 256GB", type: "Phone", img: "https://y3h2v2a5.rocketcdn.me/wp-content/uploads/2023/09/apple-iphone-15-pro-max-256gb-natural-titanium-mu793.png", price: 1299 },
      { id: 2, name: "IPhone 14 Pro Max 128GB", type: "Phone", img: "https://applehome.te.ua/wp-content/uploads/2022/09/25084.750.png", price: 1099 },
      { id: 3, name: "IPhone 13 Pro Max 512GB", type: "Phone", img: "https://stylus.ua/thumbs/390x390/5e/90/2338573.png", price: 999 }
    ],
    cart: []
  };

    const reducer = (state, action) => {
      switch (action.type) {
          case "SET_CART":
              return {...state,cart:action.payload};
              case "DELETE_ITEM_FROM_CART":
                return { ...state, cart: state.cart.filter(item => item.cartId !== action.payload.cartId) };
                case "ADD_ITEM_TO_CART":
                  return { ...state, cart: [...state.cart, action.payload] };
                
          default:
              return state;
      }
  };
  

  const [state, dispatch] = useReducer(reducer, initialState);

 
    return (
      <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};