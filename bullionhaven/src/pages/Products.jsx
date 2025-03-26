import { useEffect, useState } from "react";
import { fetchAllProducts, calculateProductPrices } from "../services/productService";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";

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
                <ProductFilters 
                    materialFilter={materialFilter} 
                    setMaterialFilter={setMaterialFilter} 
                    typeFilter={typeFilter} 
                    setTypeFilter={setTypeFilter} 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                />
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