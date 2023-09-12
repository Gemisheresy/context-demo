import { CartProvider } from "./context/cart";
import Gallery from "./components/Gallery";
import CartSidebar from "./components/CartSidebar";
import "./styles/app.css"
function App() {
  return (
    <>
      <CartProvider>
        <main className="main">
          <Gallery />
          <CartSidebar />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
