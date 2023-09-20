import { useCartContext } from "../context/cart"
import { Card, Button } from "react-bootstrap"
export default function GalleryItem({ item }) {
    const { addItemToCart } = useCartContext()
    const itemImg = require(`../assets/${item.src}`)
    return (
        <Card className="gallery-item">
            <Card.Img variant="top" src={itemImg} height={190} />
            <Card.Body className="gallery-item-body">
                <Card.Title>{item.title} </Card.Title>
            </Card.Body>
            <Card.Footer>
                <button className="gallery-item-button" onClick={() => addItemToCart(item)}>{item.price}g</button>
            </Card.Footer>
        </Card>
    )
}