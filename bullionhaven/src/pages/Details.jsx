import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { fetchMetalPrice } from "../services/productService";
import { auth } from "../config/firebase";

export default function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe(); // Cleanup on unmount
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
            cart.push({ ...product, price, quantity });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    };

    if (loading) return <p>Loading product details...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <section className="product-details">
            <img src={product.imageUrl} alt={product.name} className="product-img"/>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Manufacturer:</strong> {product.manufacturer}</p>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Type:</strong> {product.bullionType}</p>
            <p><strong>Weight:</strong> {product.weightInGrams}g</p>
            <p><strong>Purity:</strong> {product.purity}</p>
            <p><strong>Pure Weight:</strong> {product.pureWeight}g</p>
            <p><strong>Total Weight:</strong> {product.totalWeight}g</p>
            <p><strong>Price:</strong> {price ? `$${price}` : "Fetching..."}</p>

            {user ? (
                <div>
                    <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            ) : (
                <p><strong>Please log in to add items to your cart.</strong></p>
            )}
        </section>
    );
}