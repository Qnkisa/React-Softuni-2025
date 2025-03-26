export default function UserOrderItem({ item }) {
    return (
        <div className="order-item">
            <div className="order-item-img">
                <img src={`/product-photos/${item.imageUrl}`} alt={item.productName} className="order-item-image"/>
            </div>
            <div className="order-item-info">
                <p><strong>{item.productName}</strong></p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
            </div>
        </div>
    );
}