import { useState } from "react";

export default function AdminProductDiv({ product, handleEdit, setDeleteId }) {
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = () => {
        setDeleteId(product.id);
        setIsDeleted(true);
    };

    return (
        <div className="admin-product-div">
            <img src={`/product-photos/${product.imageUrl}`} alt={product.name} />
            <p>{product.name}</p>
            <div className="admin-product-div-flex">
                <button className="admin-product-div-button admin-product-div-edit" onClick={() => handleEdit(product)}>Edit</button>
                <button className="admin-product-div-button admin-product-div-delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
