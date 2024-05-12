import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import clothingbanner from './assets/clothingbanner.png'
import electronicsbanner from './assets/electronicsbanner.png'
import cosmeticsbanner from './assets/cosmeticsbanner.png'
import Cart from "./pages/Cart"
import Login from "./pages/Login"

export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computing" element={<Category category={"computing"} banner={clothingbanner}/>} />
          <Route path="/audio" element={<Category category={"audio"} banner={cosmeticsbanner}/>} />
          <Route path="/cameras" element={<Category category={"cameras"} banner={electronicsbanner}/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}/>
          </Route>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}