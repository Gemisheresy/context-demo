import { useState, useEffect } from "react"
import "../styles/gallery.css"
import GalleryItem from "./GalleryItem"
import { Container, Row, Col } from "react-bootstrap"
import { ITEMS } from "../constants"

const GalleryRow = ({ item }) => {
    return (
        <Col key={item.sku} lg={{ span: 2 }}>
            <GalleryItem item={item} />
        </Col >
    )
}

const GalleryGrid = ({ items, rowsLength }) => {
    const rowsArray = []
    for (let i = 0; i < items.length; i += rowsLength) {
        rowsArray.push(items.slice(i, i + rowsLength));
    }
    return (
        <>
            {rowsArray.map((row, i) => {
                return (
                    <Row key={`row-${i}`}>
                        {row.map((item) => <GalleryRow item={item} />)}
                    </Row >
                )
            })}
        </>
    )
}
export default function Gallery() {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(ITEMS)
    }, [])
    return (
        <>
            <h1>Gallery</h1>
            <Container className="gallery-grid" lg={12}>
                {items.length > 0 && <GalleryGrid items={items} rowsLength={6} />}
            </Container>
        </>
    )
}