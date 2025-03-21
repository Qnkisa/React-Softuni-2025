import { useEffect, useState } from "react";

export default function UserOrders() {
    const [orders, setOrders] = useState([]);

    //useEffect(() => {
        // fetching orders in future
        // setOrders(fetchedOrders);
    //}, []);

    return (
        <section className="user-orders">
            <h3>User Orders</h3>
            <div className="user-orders-div" id="user-orders-div">
                {orders.length === 0 ? (
                    <p className="no-orders">User has not completed any orders!</p>
                ) : (
                    //mapping over orders
                    null
                )}
            </div>
        </section>
    );
}