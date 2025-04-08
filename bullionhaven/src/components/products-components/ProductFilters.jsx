export default function ProductFilters({ materialFilter, setMaterialFilter, typeFilter, setTypeFilter, searchTerm, setSearchTerm }) {
    return (
        <div className="products-page-filters">
            <div className="product-page-filter">
                <label className="label-product-heading">Material:</label>
                <label className="radio-container">All
                    <input type="radio" name="material" value="All" checked={materialFilter === "All"} onChange={() => setMaterialFilter("All")} />
                    <span className="radio-checkmark"></span>
                </label>
                <label className="radio-container">Gold
                    <input type="radio" name="material" value="gold" checked={materialFilter === "gold"} onChange={() => setMaterialFilter("gold")} />
                    <span className="radio-checkmark"></span>
                </label>
                <label className="radio-container">Silver
                    <input type="radio" name="material" value="silver" checked={materialFilter === "silver"} onChange={() => setMaterialFilter("silver")} />
                    <span className="radio-checkmark"></span>
                </label>
            </div>
            <div className="product-page-filter">
                <label className="label-product-heading">Type:</label>
                <label className="radio-container">All
                    <input type="radio" name="type" value="All" checked={typeFilter === "All"} onChange={() => setTypeFilter("All")} />
                    <span className="radio-checkmark"></span>
                </label>
                <label className="radio-container">Coin
                    <input type="radio" name="type" value="coin" checked={typeFilter === "coin"} onChange={() => setTypeFilter("coin")} />
                    <span className="radio-checkmark"></span>
                </label>
                <label className="radio-container">Ingot
                    <input type="radio" name="type" value="ingot" checked={typeFilter === "ingot"} onChange={() => setTypeFilter("ingot")} />
                    <span className="radio-checkmark"></span>
                </label>
            </div>
            <div className="product-page-filter">
                <label className="label-product-heading">Search:</label>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a product..." />
            </div>
        </div>
    );
}