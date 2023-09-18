import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import "../styles/header.css"
export default function Header() {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Navigation />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}