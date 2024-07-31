import React, { useReducer, useEffect } from "react";

export const CartContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [{ id: action.id, title: action.title, image: action.image }];
    case "delete":
      return [];
    case "buy":
      return [];
    default:
      return state;
  }
};

export default function CartHandle({ children }) {
  const [cart, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cartState: cart, cartDispatch: dispatch }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
}
