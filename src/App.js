import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GalleryPage from "./Pages/GalleryPage";
import CheckoutPage from "./Pages/CheckoutPage";

import "./styles/app.css"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/check-out" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
