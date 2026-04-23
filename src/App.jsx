import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Login from "./pages/Login";  
import Register from "./pages/Register"; 
import About from "./pages/About";      
import Contact from "./pages/Contact";   
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetail from "./pages/ProductDetail";
import RestaurantPanel from "./pages/RestaurantPanel";






function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(cart.map((x) => x.id === item.id ? { ...x, qty: x.qty + 1 } : x));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home cart={cart} />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} cart={cart} />} />
            <Route path="/cart" element={<Cart cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About cart={cart} />} />       
            <Route path="/contact" element={<Contact cart={cart} />} />   
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} cart={cart} />} />
            <Route path="/restaurant" element={<RestaurantPanel />} />
            
            
           
          </Routes>
        </main>

        <Routes>
         
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;