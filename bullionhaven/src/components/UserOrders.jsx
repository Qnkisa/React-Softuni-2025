import { useEffect, useState } from "react";
import { db, auth } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import UserOrderCard from "./UserOrderCard";

export default function UserOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!auth.currentUser) return;

            try {
                const ordersRef = collection(db, "orders");
                const q = query(ordersRef, where("userId", "==", auth.currentUser.uid));
                const querySnapshot = await getDocs(q);

                const fetchedOrders = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setOrders(fetchedOrders);
            } catch (error) {
                console.error("Error fetching user orders:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <section className="user-orders">
            <h3>User Orders</h3>

            {loading ? <p>Loading orders...</p> : (
                <div className="user-orders-div">
                    {orders.length === 0 ? (
                        <p className="no-orders">User has not completed any orders!</p>
                    ) : (
                        orders.map((order) => (
                            <UserOrderCard key={order.id} order={order} />
                        ))
                    )}
                </div>
            )}
        </section>
    );
}