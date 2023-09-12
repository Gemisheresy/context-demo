import { useCartContext } from "../context/cart"
export default function CartItem({ item }) {
    const { removeItemFromCart, updateQuantityOfCartItem } = useCartContext()
    const handleQuantityChange = (e) => {
        updateQuantityOfCartItem(item, e.target.value)
    }
    return (
        <>
            <p>{`sku ${item.sku}`}</p>
            <input
                className="cart-item-quantity-input"
                type="number"
                min={1}
                onChange={handleQuantityChange}
                value={item.quantity}
            />
            <button onClick={() => removeItemFromCart(item)}>X</button>
        </>
    )
}