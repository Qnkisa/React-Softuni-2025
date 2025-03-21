import ChangePassword from "../components/ChangePassword";
import SpotPrices from "../components/SpotPrices";
import UserOrders from "../components/UserOrders";

export default function UserProfile(){
    return (
        <>
            <div className="user-profile-top">
                <div className="profile-left">
                    <div className="profile-left-icon">
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <h1>Your Profile</h1>
                </div>
                <ChangePassword/>
            </div>
            <UserOrders/>
            <SpotPrices/>
        </>
    );
}