import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Currency from "./pages/Currency";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import PageBuildHelper from "./components/PageBuildHelper"

function App() {


  return (
    <Router>
      <Navbar/>
      {/*<PageBuildHelper/>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
