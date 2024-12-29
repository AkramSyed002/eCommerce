import React, { createContext, useContext, useReducer, ReactNode } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  poster: string;
};

type CartState = {
  products: Product[];
};

type CartAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "REMOVE_PRODUCT"; payload: { id: string } }
  | {
      type: "UPDATE_PRODUCT_QUANTITY";
      payload: { id: string; quantity: number };
    };

type CartContextType = {
  cart: CartState;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  updateCartProductQuantity: (id: string, quantity: number) => void;
};

const initialState: CartState = {
  products: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + action.payload.quantity,
                }
              : product
          ),
        };
      }

      return { ...state, products: [...state.products, action.payload] };
    }

    case "REMOVE_PRODUCT": {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    }

    case "UPDATE_PRODUCT_QUANTITY": {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
    }

    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const removeProduct = (id: string) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: { id } });
  };

  const updateCartProductQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeProduct(id);
    } else {
      dispatch({ type: "UPDATE_PRODUCT_QUANTITY", payload: { id, quantity } });
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateCartProductQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
