import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Currency from "./pages/Currency";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import AdminPanel from "./pages/AdminPanel";

import ProtectedRoute from "./components/ProtectedRoute"; 
import PublicRoute from "./components/PublicRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import Details from "./pages/Details";

function App() {
  const adminUID = import.meta.env.VITE_ADMIN_UID;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/login" element={<PublicRoute><LogIn /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/profile/:userId" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route 
          path="/admin" 
          element={<ProtectedAdminRoute><AdminPanel /></ProtectedAdminRoute>} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;