import { useEffect, useState } from "react";
import { fetchAllProducts, calculateProductPrices } from "../services/productService";
import ProductCard from "../components/ProductCard";
import SpotPrices from "../components/SpotPrices";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [prices, setPrices] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [materialFilter, setMaterialFilter] = useState("All");
    const [typeFilter, setTypeFilter] = useState("All");

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchAllProducts();
            setProducts(fetchedProducts);

            const productPrices = await calculateProductPrices(fetchedProducts);
            setPrices(productPrices);
            setFilteredProducts(fetchedProducts);
        };

        loadProducts();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (materialFilter !== "All") {
            filtered = filtered.filter(product => product.material === materialFilter);
        }

        if (typeFilter !== "All") {
            filtered = filtered.filter(product => product.bullionType === typeFilter);
        }

        if (searchTerm) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [materialFilter, typeFilter, searchTerm, products]);

    return (
        <div className="products-page">
            <div className="products-page-top">
                <h1>Products</h1>
                <div className="products-page-filters">
                    <div className="product-page-filter">
                        <label>Material:</label>
                        <input 
                            type="radio" 
                            name="material" 
                            value="All" 
                            checked={materialFilter === "All"} 
                            onChange={() => setMaterialFilter("All")} 
                        /> All
                        <input 
                            type="radio" 
                            name="material" 
                            value="gold" 
                            checked={materialFilter === "gold"} 
                            onChange={() => setMaterialFilter("gold")} 
                        /> Gold
                        <input 
                            type="radio" 
                            name="material" 
                            value="silver" 
                            checked={materialFilter === "silver"} 
                            onChange={() => setMaterialFilter("silver")} 
                        /> Silver
                    </div>
                    <div className="product-page-filter">
                        <label>Type:</label>
                        <input 
                            type="radio" 
                            name="type" 
                            value="All" 
                            checked={typeFilter === "All"} 
                            onChange={() => setTypeFilter("All")} 
                        /> All
                        <input 
                            type="radio" 
                            name="type" 
                            value="coin" 
                            checked={typeFilter === "coin"} 
                            onChange={() => setTypeFilter("coin")} 
                        /> Coin
                        <input 
                            type="radio" 
                            name="type" 
                            value="ingot" 
                            checked={typeFilter === "ingot"} 
                            onChange={() => setTypeFilter("ingot")} 
                        /> Ingot
                    </div>
                    <div className="product-page-filter">
                        <label>Search:</label>
                        <input 
                            type="text" 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            placeholder="Search for a product..." 
                        />
                    </div>
                </div>
            </div>

            <div className={filteredProducts.length === 0 ? "product-grid product-grid-block" : "product-grid"}>
                {filteredProducts.length === 0 ? (
                    <p className="no-products-found">No products found.</p>
                ) : (
                    filteredProducts.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            price={prices[product.id]} 
                        />
                    ))
                )}
            </div>
        </div>
    );
}