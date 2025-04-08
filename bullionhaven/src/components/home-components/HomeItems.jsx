import { useEffect, useState } from "react";
import { fetchProducts, calculateProductPrices } from "../../services/productService";
import ProductCard from "../products-components/ProductCard";

export default function HomeItems() {
    const [products, setProducts] = useState([]);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);

            const productPrices = await calculateProductPrices(fetchedProducts);
            setPrices(productPrices);
        };

        loadProducts();
    }, []);

    return (
        <section className="home-products">
            <h3>Featured Products</h3>
            <div className="product-grid">
                {products.length === 0 ? <p>Loading products...</p> : (
                    products.map(product => (
                        <ProductCard key={product.id} product={product} price={prices[product.id]} />
                    ))
                )}
            </div>
        </section>
    );
}