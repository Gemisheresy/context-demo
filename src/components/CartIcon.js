import { useCartContext } from "../context/cart";
import { Link } from "react-router-dom";
export default function CartIcon() {
    const { getCartItemCount } = useCartContext()
    const getMarginOffset = (cart) => {
        const digits = `${cart}`.length
        switch (digits) {
            case 2:
                return "21px";
            case 3:
                return "18px";
            default:
                return "24px";

        }
        return `${cart}`.length
    }
    return (
        <Link
            to={{
                pathname: "/check-out"
            }}>

            <div className="cart-icon">
                <div className="cart-icon-img">
                    <i className="bi bi-cart" ></i>
                </div>
                <div className="cart-item-circle"></div>
                <div className="cart-item-total" style={{ marginLeft: getMarginOffset(getCartItemCount()) }}>
                    <p>{getCartItemCount()}</p>
                </div>
            </div >
        </Link>
    )
}