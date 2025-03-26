import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    let products = querySnapshot.docs
        .map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
        .filter(product => !product.deleted); // Exclude deleted products

    // Shuffle and take 9 random products
    return products.sort(() => 0.5 - Math.random()).slice(0, 9);
};

export const fetchAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    let products = querySnapshot.docs
        .map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
        .filter(product => !product.deleted); // Exclude deleted products

    return products;
};

export const fetchMetalPrice = async (material) => {
    const metalCode = material.toLowerCase() === "gold" ? "XAU" : "XAG";
    try {
        const response = await fetch(`https://api.gold-api.com/price/${metalCode}`);
        const data = await response.json();
        return data.price;
    } catch (error) {
        console.error(`Error fetching ${material} price:`, error);
        return null;
    }
};

export const calculateProductPrices = async (products) => {
    let productPrices = {};

    for (const product of products) {
        const spotPrice = await fetchMetalPrice(product.material);
        if (spotPrice !== null) {
            productPrices[product.id] = (
                (spotPrice * parseFloat(product.ouncePercentage)) + parseFloat(product.premium)
            ).toFixed(2);
        }
    }

    return productPrices;
};