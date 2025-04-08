export default function OfficeDetails({name, address, level, phone, email, hours}){
    return (
        <div className="office-details">
            <p className="office-details-heading">{name}</p>
            <div className="office-details-grid">
                <div className="office-details-div">
                    <p>Address:</p>
                    <span>{address}</span>
                </div>
                <div className="office-details-div">
                    <p>Level:</p>
                    <span>{level}</span>
                </div>
                <div className="office-details-div">
                    <p>Phone:</p>
                    <span>{phone}</span>
                </div>
                <div className="office-details-div">
                    <p>Email:</p>
                    <span>{email}</span>
                </div>
                <div className="office-details-div">
                    <p>Hours:</p>
                    <span>{hours}</span>
                </div>
            </div>
          </div>
    );
}