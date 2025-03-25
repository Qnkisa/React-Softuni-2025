import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import ChangePassword from "../components/ChangePassword";
import SpotPrices from "../components/SpotPrices";
import UserOrders from "../components/UserOrders";
import { app } from "../config/firebase";

export default function UserProfile() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [authUserId, setAuthUserId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setAuthUserId(user.uid);

                if (user.uid !== userId) {
                    navigate("/");
                }
            } else {
                navigate("/login");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [userId, navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="user-profile-top">
                <div className="profile-left">
                    <div className="profile-left-icon">
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <h1>Your Profile</h1>
                </div>
                <ChangePassword />
            </div>
            <UserOrders />
        </>
    );
}