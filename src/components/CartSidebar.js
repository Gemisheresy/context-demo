import { useCartContext } from "../context/cart"
import CartItem from "./CartItem"
import "../styles/cart-sidebar.css"


export default function CartSidebar() {
    const { cart } = useCartContext()
    return (
        <section className="cart-sidebar">
            <h1>Shopping Cart</h1>
            <div className="cart-list">
                {(cart.length !== 0) && cart.map((item) => {
                    return (
                        <div key={item.sku} className="cart-item">
                            <CartItem item={item} />
                        </div>
                    )

                })}
            </div>
        </section >
    )
}