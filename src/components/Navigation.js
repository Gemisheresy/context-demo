import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Navigation() {
    return (
        <nav className="navi-bar">
            <Container>
                <Row>
                    <Col className="navi-bar-link">
                        <Link
                            to={{
                                pathname: "/"
                            }}
                        >Shop
                        </Link>
                    </Col>
                    <Col className="navi-bar-link"><a href="/login">Login</a></Col>
                    <Col className="navi-bar-link"><a href="/about">About Us</a></Col>
                    <Col><CartIcon /></Col>
                </Row>
            </Container>
        </nav>
    )
}