import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { fetchMetalPrice } from "../services/productService";
import { auth } from "../config/firebase";
import WebsiteSuccessMessage from "../components/message-components/WebsiteSuccessMessage";

export default function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const[showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, "products", id);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setProduct(data);

                    const spotPrice = await fetchMetalPrice(data.material);
                    if (spotPrice !== null) {
                        setPrice(((spotPrice * parseFloat(data.ouncePercentage)) + parseFloat(data.premium)).toFixed(2));
                    }
                } else {
                    console.log("No such product!");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (!user) {
            navigate("/login");
            return;
        }
    
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItemIndex = cart.findIndex((item) => item.id === id);
    
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({ ...product, id, price, quantity });
        }
    
        localStorage.setItem("cart", JSON.stringify(cart));
        setShowSuccessMessage(true);

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 2000);
    };

    if (loading) return <p>Loading product details...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <section className="product-details">
            {showSuccessMessage && <WebsiteSuccessMessage successMessage="Product added to cart successfully!"/>}
            <div className="product-details-top">
                <div className="product-details-top-image">
                    <img src={`/product-photos/${product.imageUrl}`} alt={product.name} className="product-img"/>
                </div>
                <div className="product-details-top-content">                
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <div className="product-details-top-content-flex">
                        <p><strong>Price:</strong> {price ? `$${price}` : "Fetching..."}</p>
                        {user ? (
                            <div className="details-add-to-cart">
                                <div className="details-add-to-cart-helper">
                                    <button className="quantity-button quantity-minus" onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
                                    <span>{quantity}</span>
                                    <button className="quantity-button quantity-plus" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                            </div>
                        ) : (
                            <p className="details-log-in-message"><strong>Please log in to add items to your cart.</strong></p>
                        )}
                    </div>
                </div>
            </div>
            <div className="product-details-bottom">
                <h2>Technical Details</h2>
                <div className="technical-details-grid">
                    <div className="technical-detail-div">
                        <p>Manufacturer:</p>
                        <span>{product.manufacturer}</span>
                    </div>
                    <div className="technical-detail-div">
                        <p>Material:</p>
                        <span>{product.material}</span>
                    </div>
                    <div className="technical-detail-div">
                        <p>Bullion Type:</p>
                        <span>{product.bullionType}</span>
                    </div>
                    <div className="technical-detail-div">
                        <p>Total Weight:</p>
                        <span>{product.totalWeight}g</span>
                    </div>
                    <div className="technical-detail-div">
                        <p>Purity:</p>
                        <span>{product.purity}</span>
                    </div>
                    <div className="technical-detail-div">
                        <p>Pure Weight:</p>
                        <span>{product.pureWeight}g</span>
                    </div>
                </div>
            </div>
            
        </section>
    );
}