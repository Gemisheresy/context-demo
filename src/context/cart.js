import { createContext, useContext, useState } from "react";


const CartContext = createContext(undefined)

const findItemBySku = (currItem, sku) => currItem.sku === sku;
const getCartIndex = (arr, sku) => arr.findIndex((currCartItem) => findItemBySku(currCartItem, sku))
const updateItemQuantity = (item, amount) => {
    return {
        ...item,
        quantity: amount
    }
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const cartContext = {
        cart: cart,
        addItemToCart: (item) => {
            const itemCartIndex = getCartIndex(cart, item.sku)
            if (itemCartIndex < 0) {
                item.quantity = 1;
                return setCart([...cart, item])
            }
            const updatedItem = updateItemQuantity(cart[itemCartIndex], cart[itemCartIndex].quantity + 1)
            setCart([...cart.slice(0, itemCartIndex), updatedItem, ...cart.slice(itemCartIndex + 1, cart.length)])

        },
        removeItemFromCart: (item) => {
            const itemCartIndex = getCartIndex(cart, item.sku)
            setCart([...cart.slice(0, itemCartIndex), ...cart.slice(itemCartIndex + 1, cart.length)])
        },
        updateQuantityOfCartItem: (item, amount) => {
            const itemCartIndex = getCartIndex(cart, item.sku)
            const updatedItem = updateItemQuantity(cart[itemCartIndex], amount)
            setCart([...cart.slice(0, itemCartIndex), updatedItem, ...cart.slice(itemCartIndex + 1, cart.length)])
        },
        getCartSubtotal: () => {
            return cart.length < 0 ? 0.00 : parseFloat(cart.map((item) => item.price * item.quantity).reduce((total, currItemTotal) => total + currItemTotal, 0.00).toFixed(2))
        },
        getCartTotal: (subtotal) => {
            let tax = subtotal * .08;
            let total = subtotal + tax;
            return parseFloat(total).toFixed(2);
        },
        getCartItemCount: () => {
            return cart.length < 0 ? 0 : cart.map((item) => item.quantity).reduce((total, quantity) => total + quantity, 0)
        },
        clearCart: () => {
            setCart([])
        }
    }
    return (
        <CartContext.Provider
            value={cartContext}
        >
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => useContext(CartContext)