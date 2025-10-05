import { createContext, useReducer } from 'react';

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case 'CLEAR_CART':
      return { ...state, cartItems: [] };

    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (_, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (item) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const removeItem = (index) =>
    dispatch({ type: 'REMOVE_ITEM', payload: index });

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
