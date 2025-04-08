import { Link } from "react-router-dom";
import styles from '../../css-modules/ProductCard.module.css';

export default function ProductCard({ product, price }) {
    return (
        <div className={styles.productCard}>
            <img 
                src={`/product-photos/${product.imageUrl}`} 
                alt={product.name} 
                className={styles.productCardImg} 
            />
            <p className={styles.productCardText}>{product.name}</p>
            <span className={styles.productCardPrice}>{price ? `$${price}` : "Fetching..."}</span>
            <Link to={`/details/${product.id}`} className={styles.productCardLink}>Details</Link>
        </div>
    );
}