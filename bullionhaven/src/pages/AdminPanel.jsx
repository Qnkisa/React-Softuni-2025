import React, { useState, useEffect, useRef } from "react";
import { db } from "../config/firebase";
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from "firebase/firestore";
import AdminProductDiv from "../components/AdminProductDiv";
import { fetchAllProducts } from "../services/productService";

export default function AdminPanel() {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        ouncePercentage: "",
        weightInGrams: "",
        premium: "",
        material: "gold",
        bullionType: "coin",
        totalWeight: "",
        purity: "",
        pureWeight: "",
        manufacturer: "",
        imageUrl: ""
    });
    const [editingId, setEditingId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    
    const formRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await fetchAllProducts();
            setProducts(productsData);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (deleteId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [deleteId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await updateDoc(doc(db, "products", editingId), formData);
        } else {
            await addDoc(collection(db, "products"), formData);
        }
        setFormData({
            name: "", description: "", ouncePercentage: "", weightInGrams: "", premium: "", 
            material: "gold", bullionType: "coin", totalWeight: "", purity: "", pureWeight: "", 
            manufacturer: "", imageUrl: ""
        });
        setEditingId(null);
        
        const updatedProducts = await fetchAllProducts(); // Refresh product list
        setProducts(updatedProducts);
    };
    
    const handleDelete = async () => {
        await softDeleteProduct(deleteId);
        setDeleteId(null);
        
        const updatedProducts = await fetchAllProducts(); // Refresh product list
        setProducts(updatedProducts);
    };

    const handleEdit = (product) => {
        setFormData(product);
        setEditingId(product.id);

        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="admin-panel">
            <div className="admin-panel-top">
                <div className="admin-panel-heading">
                    <div className="admin-panel-heading-icon">
                        <img src="/website-icons/construction-edited.png" alt="" />
                    </div>
                    <h1>Admin Panel</h1>
                </div>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <label htmlFor="product-name">Product name:</label>
                    <input type="text" name="name" id="product-name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                    <label htmlFor="product-description">Product description:</label>
                    <textarea name="description" id="product-description" value={formData.description} onChange={handleChange} placeholder="Description" required />
                    <label htmlFor="product-ounce-percentage">Ounce Percentage:</label>
                    <input type="number" name="ouncePercentage" id="product-ounce-percentage" value={formData.ouncePercentage} onChange={handleChange} placeholder="Ounce Percentage" required />
                    <label htmlFor="weight-in-grams">Weight in grams:</label>
                    <input type="number" name="weightInGrams" id="weight-in-grams" value={formData.weightInGrams} onChange={handleChange} placeholder="Weight in Grams" required />
                    <label htmlFor="product-premium">Premium price:</label>
                    <input type="number" name="premium" id="product-premium" value={formData.premium} onChange={handleChange} placeholder="Premium" required />
                    
                    <label>Material:</label>
                    <label className="radio-container">Gold
                        <input type="radio" name="material" value="gold" checked={formData.material === "gold"} onChange={handleChange} />
                        <span className="radio-checkmark"></span>
                    </label>
                    <label className="radio-container">Silver
                        <input type="radio" name="material" value="silver" checked={formData.material === "silver"} onChange={handleChange} />
                        <span className="radio-checkmark"></span>
                    </label>
                    
                    <label>Bullion Type:</label>
                    <label className="radio-container">Ingot
                        <input type="radio" name="bullionType" value="ingot" checked={formData.bullionType === "ingot"} onChange={handleChange} />
                        <span className="radio-checkmark"></span>
                    </label>
                    <label className="radio-container">Coin
                        <input type="radio" name="bullionType" value="coin" checked={formData.bullionType === "coin"} onChange={handleChange} />
                        <span className="radio-checkmark"></span>
                    </label>
                    
                    <label htmlFor="total-weight">Total weight:</label>
                    <input type="number" name="totalWeight" id="total-weight" value={formData.totalWeight} onChange={handleChange} placeholder="Total Weight" required />
                    <label htmlFor="product-purity">Purity:</label>
                    <input type="number" name="purity" id="product-purity" value={formData.purity} onChange={handleChange} placeholder="Purity" required />
                    <label htmlFor="pure-weight">Pure weight:</label>
                    <input type="number" name="pureWeight" id="pure-weight" value={formData.pureWeight} onChange={handleChange} placeholder="Pure Weight" required />
                    <label htmlFor="product-manufacturer">Manufacturer:</label>
                    <input type="text" name="manufacturer" id="product-manufacturer" value={formData.manufacturer} onChange={handleChange} placeholder="Manufacturer" required />
                    <label htmlFor="image-url">Image URL:</label>
                    <input type="text" name="imageUrl" id="image-url" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required />
                    
                    <button type="submit">{editingId ? "Update Product" : "Add Product"}</button>
                </form>
            </div>
            
            

            <h2>Existing Products</h2>
            <div className="admin-products-div">
                {products.map((product) => (
                    <AdminProductDiv 
                        key={product.id}
                        product={product}
                        handleEdit={handleEdit}
                        setDeleteId={setDeleteId}
                    />
                ))}
            </div>

            {deleteId && (
                <div className="admin-delete-modal-helper">
                    <div className="admin-delete-modal-blur"></div>
                    <div className="admin-delete-modal">
                        <p>Are you sure you want to delete this product?</p>
                        <div className="admin-delete-modal-flex">
                            <button className="admin-delete-modal-flex-delete" onClick={handleDelete}>Yes, Delete</button>
                            <button className="admin-delete-modal-flex-cancel" onClick={() => setDeleteId(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}