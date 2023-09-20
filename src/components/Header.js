import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import "../styles/header.css"
export default function Header() {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col><h1>Gemis Gear Galleria</h1></Col>
                    <Col>
                        <Navigation />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}