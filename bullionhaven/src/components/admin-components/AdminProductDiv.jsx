import React, { useState } from "react";
import styles from '../../css-modules/AdminProductDiv.module.css';

export default function AdminProductDiv({ product, handleEdit, setDeleteId }) {
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = () => {
        setDeleteId(product.id);
        setIsDeleted(true);
    };

    return (
        <div className={styles.adminProductDiv}>
            <img src={`/product-photos/${product.imageUrl}`} alt={product.name} className={styles.adminProductDivImg} />
            <p className={styles.adminProductDivP}>{product.name}</p>
            <div className={styles.adminProductDivFlex}>
                <button className={`${styles.adminProductDivButton} ${styles.adminProductDivEdit}`} onClick={() => handleEdit(product)}>Edit</button>
                <button className={`${styles.adminProductDivButton} ${styles.adminProductDivDelete}`} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}