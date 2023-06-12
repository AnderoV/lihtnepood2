import { createContext, useContext, useState } from "react";
import products from "../content/products.json";
import { toast } from "react-toastify";
import { transformToStripe } from "../utils/helpers";
import getStripe from "../utils/getStripe";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const cartTotalPrice = cartItems.reduce(
    (price, item) => item.price * item.quantity + price,
    0
  );

  const increaseQuantity = (id) => {
    const product = products.find((el) => el.id === id);
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === id) == null) {
        toast.success("Added to Cart");
        return [
          ...prevItems,
          {
            id,
            quantity: 1,
            title: product.title,
            price: product.price,
            img: product.picture,
            description: product.description,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityItem = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === id)?.quantity === 1) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const createCheckOutSession = async (cartItems) => {
    const stripe = await getStripe();
    const items = transformToStripe(cartItems);

    const checkoutSession = await axios.post("/api/checkout_sessions", items);

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) {
      alert(result?.error.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        getQuantityItem,
        increaseQuantity,
        decreaseQuantity,
        createCheckOutSession,
        removeItem,
        cartItems,
        cartTotalPrice,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
