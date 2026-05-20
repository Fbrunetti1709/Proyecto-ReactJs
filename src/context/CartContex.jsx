// CREAMOS UN CONTEXTO PARA GESTIONAR EL CARRITO DE COMPRAS

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

//CUSTOM HOOK PARA USAR EL CONTEXTO DEL <CARRITO></CARRITO>

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

//PROVEEDOR DEL CONTEXTO DEL CARRITO

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  //evalua existencia y devuelve un booleano
  const IsInCart = (item) => {
    //FUNCION PARA VER SI UN PRODUCTO ESTA EN EL CARRITO
    const Incart = cart.some((Element) => Element.id === item.id);
    return Incart;
  };

  //agregar al carrito
  const addItem = (item) => {
    if (IsInCart(item)) {
      alert("El producto ya esta en el carrito");
      return;
    }
    setCart([...cart, item]);
    alert("Producto agregado al carrito👀");
  };

  //eliminar del carrito

  const removeItem = (id) => {
    const updateCart = cart.filter((Element) => Element.id !== id);
    setCart(updateCart);
    alert("Producto eliminado del carrito👀");
  };

  //vacia el carrito
  const clearCart = () => {
    setCart([]);
  };

  //Total (Item) de productos en el carrito para este caso sin quantity.
  const getTotalItems = () => {
    return cart.length;
  };

  //total a pagar del carrito
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  //Checkout del carrito
  const checkout = () => {
    alert("Gracias por su compra👀");
    clearCart();
    navigate("/");
  };

  const values = {
    addItem,
    clearCart,
    removeItem,
    getTotalItems,
    getCartTotal,
    checkout,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
