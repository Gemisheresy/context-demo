import { useCartContext } from "../context/cart"
import jegan from '../assets/jegan-2.jpeg'
export default function GalleryItem({ item }) {
    const { addItemToCart } = useCartContext()
    return (
        <>
            <img src={jegan} height={200} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="gallery-item-cta">
                <h4>{item.price}</h4>
                <button onClick={(e) => addItemToCart(item)}>Add to Cart</button>
            </div>
        </>
    )
}