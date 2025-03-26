import { useEffect, useState } from "react";
import { db, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import WebsiteSuccessMessage from "../components/WebsiteSuccessMessage";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const phoneRegex = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{3}[-.\s]?\d{4,6}$/;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (!user) {
                localStorage.removeItem("cart");
                setCart([]);
            } else {
                const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
                setCart(storedCart);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleOrder = async () => {
        if (!phoneRegex.test(phoneNumber)) {
            setShowErrorMessage(true);
            return;
        }
    
        const formattedItems = cart.map(item => {
            if (!item.id || !item.name || !item.price) {
                console.error("Invalid item detected:", item);
            }
            return {
                productId: item.id || "MISSING_ID",
                productName: item.name || "Unknown Product",
                quantity: item.quantity || 1,
                price: Number(item.price) || 0,
                imageUrl: item.imageUrl || "" 
            };
        });
    
        const totalPrice = cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
        const formattedTotalPrice = totalPrice.toFixed(2);
    
        try {
            await addDoc(collection(db, "orders"), {
                userId: user.uid,
                fullName,
                address,
                phoneNumber,
                items: formattedItems,
                totalPrice: formattedTotalPrice,
                orderDate: new Date()
            });
            setShowSuccessMessage(true);
            setCart([]);
            localStorage.removeItem("cart");

            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    return (
        <section className="cart-page">
            {showSuccessMessage && <WebsiteSuccessMessage successMessage="Order completed successfully!"/>}
            <h1>Your Cart</h1>
            
            {!user ? (
                <h2><strong>Please log in to view your cart.</strong></h2>
            ) : (
                <>
                    {cart.length === 0 ? (
                        <h2>Your cart is empty.</h2>
                    ) : (
                        <div className="cart-div">
                            <div className="cart-items">
                                {cart.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={`/product-photos/${item.imageUrl}`} alt={item.name} className="cart-item-image"/>
                                        <div className="cart-item-details">
                                            <p>{item.name}</p>
                                            <span>Price: ${item.price}</span>
                                            <div className="quantity-controls">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                            <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}

                                <p className="total-price">
                                    <strong>Total Price:</strong> ${cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0).toFixed(2)}
                                </p>
                            </div>

                            <div className="order-form">
                                <form className="order-form-helper" onSubmit={(e) => { e.preventDefault(); handleOrder(); }}>
                                    <h2 id="order-details-order">Order Details</h2>
                                    <div className="order-form-div">
                                        <label htmlFor="full-name-cart">Full Name:</label>
                                        <input
                                            type="text"
                                            id="full-name-cart"
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="order-form-div">
                                        <label htmlFor="address-cart">Address:</label>
                                        <input
                                            type="text"
                                            id="address-cart"
                                            placeholder="Address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="order-form-div">
                                        <label htmlFor="phone-number-cart">Phone Number:</label>
                                        <input
                                            type="number"
                                            id="phone-number-cart"
                                            placeholder="Phone Number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {showErrorMessage && <p className="error-message error-message-cart">Please enter a valid phone number!</p>}
                                    <button type="submit">Place Order</button>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}
