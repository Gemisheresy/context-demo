import { useCartContext } from "../context/cart"
import { Col } from "react-bootstrap"
export default function CartItem({ item }) {
    const { removeItemFromCart, updateQuantityOfCartItem } = useCartContext()
    const handleQuantityChange = (e) => {
        updateQuantityOfCartItem(item, parseInt(e.target.value))
    }
    return (
        <>
            <Col>
                <p>{`sku ${item.sku}`}</p>
            </Col>
            <Col>
                <p>{item.title}</p>
            </Col>
            <Col>
                <input
                    className="cart-item-quantity-input"
                    type="number"
                    min={1}
                    onChange={handleQuantityChange}
                    value={item.quantity}
                />
            </Col>
            <Col>
                <button onClick={() => removeItemFromCart(item)}>X</button>
            </Col>
        </>
    )
}