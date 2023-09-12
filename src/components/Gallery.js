import "../styles/gallery.css"
import GalleryItem from "./GalleryItem"

const items = [
    {
        title: "HGUC Jegan D",
        price: 17.99,
        description: "this is a jegan D and retooled jegan",
        sku: 1
    },
    {
        title: "HGUC Jegan",
        price: 17.99,
        description: "this is a jegan the longest used mobile suit in uc",
        sku: 2
    },
    {
        title: "HGUC Jegan J",
        price: 17.99,
        description: "this is a jegan j the retooled for the late uc",
        sku: 3
    },
    {
        title: "HGUC Jegan S",
        price: 17.99,
        description: "this is a stark jegan",
        sku: 4
    }
]
export default function Gallery() {
    return (
        <section className="gallery">
            <h1>Gallery</h1>
            <div className="gallery-grid">
                {items.map((item) => {
                    return (
                        <div key={item.sku} className="gallery-item">
                            <GalleryItem item={item} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}