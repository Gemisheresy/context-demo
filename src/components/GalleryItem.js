import { useCartContext } from "../context/cart"
import jegan from '../assets/jegan-2.jpeg'
import { Card, Button } from "react-bootstrap"
export default function GalleryItem({ item }) {
    const { addItemToCart } = useCartContext()
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={jegan} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>{item.price}</Card.Title>
                <Button variant="primary" onClick={() => addItemToCart(item)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}