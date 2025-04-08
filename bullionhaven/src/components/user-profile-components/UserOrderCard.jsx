import UserOrderItem from "./UserOrderItem";

export default function UserOrderCard({ order }) {
    return (
        <div className="order-card">
            <div className="order-card-info">
                <span>Order ID: {order.id}</span>
                <p><strong>Name:</strong> {order.fullName}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Phone:</strong> {order.phoneNumber}</p>
                <p><strong>Order Date:</strong> {new Date(order.orderDate.seconds * 1000).toLocaleDateString()}</p>
            </div>
            <div className="order-items">
                <span>Items Ordered:</span>
                {order.items.map((item, index) => (
                    <UserOrderItem key={index} item={item} />
                ))}
                <p className="order-total"><strong>Total Price:</strong> ${order.totalPrice}</p>
            </div>
        </div>
    );
}