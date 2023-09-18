import { useCartContext } from "../context/cart";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "../components/CartItem";
import "../styles/checkout.css"
export default function CheckoutPage(props) {
    const { cart, getCartSubtotal, getCartTotal } = useCartContext()
    return (
        <main>
            <h1>Checkout</h1>
            <Container className="checkout-box" xs={4} lg={12}>
                {cart.length > 0 && cart.map((item, i) => {
                    return (
                        <Row key={item.sku} sm={7} className="checkout-row">
                            <CartItem item={item} />
                        </Row>
                    )
                })}
                <Row>
                    <Col lg={{ span: 2, offset: 7 }}>
                        <h3>Subtotal:</h3>
                    </Col>
                    <Col lg={{ span: 2, offset: 1 }}>
                        <h3>${getCartSubtotal()}</h3>
                    </Col>
                </Row>
                <Row >
                    <Col lg={{ span: 2, offset: 7 }}>
                        <h3>Total:</h3>
                    </Col>
                    <Col lg={{ span: 2, offset: 1 }}>
                        <h3>${getCartTotal(getCartSubtotal())}</h3>
                    </Col>
                </Row>

            </Container>
        </main >
    )

}