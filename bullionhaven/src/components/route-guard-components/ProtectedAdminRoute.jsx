import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedAdminRoute = ({ children }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user || user.uid !== "9tr19YEHTaXKUJXK0DUzAqQFt642") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedAdminRoute;