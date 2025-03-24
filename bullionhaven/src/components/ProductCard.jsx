import {Link} from "react-router-dom";

export default function ProductCard({ product, price }) {
    return (
        <div className="product-card">
            <img src={`/product-photos/${product.imageUrl}`} alt={product.name} className="product-img"/>
            <p>{product.name}</p>
            <span>{price ? `$${price}` : "Fetching..."}</span>
            <Link to={`/details/${product.id}`}>Details</Link>
        </div>
    );
}