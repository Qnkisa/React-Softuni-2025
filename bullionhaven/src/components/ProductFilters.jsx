export default function ProductFilters({ materialFilter, setMaterialFilter, typeFilter, setTypeFilter, searchTerm, setSearchTerm }) {
    return (
        <div className="products-page-filters">
            <div className="product-page-filter">
                <label>Material:</label>
                <input type="radio" name="material" value="All" checked={materialFilter === "All"} onChange={() => setMaterialFilter("All")} /> All
                <input type="radio" name="material" value="gold" checked={materialFilter === "gold"} onChange={() => setMaterialFilter("gold")} /> Gold
                <input type="radio" name="material" value="silver" checked={materialFilter === "silver"} onChange={() => setMaterialFilter("silver")} /> Silver
            </div>
            <div className="product-page-filter">
                <label>Type:</label>
                <input type="radio" name="type" value="All" checked={typeFilter === "All"} onChange={() => setTypeFilter("All")} /> All
                <input type="radio" name="type" value="coin" checked={typeFilter === "coin"} onChange={() => setTypeFilter("coin")} /> Coin
                <input type="radio" name="type" value="ingot" checked={typeFilter === "ingot"} onChange={() => setTypeFilter("ingot")} /> Ingot
            </div>
            <div className="product-page-filter">
                <label>Search:</label>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a product..." />
            </div>
        </div>
    );
}