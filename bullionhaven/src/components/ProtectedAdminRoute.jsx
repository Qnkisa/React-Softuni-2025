import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedAdminRoute = ({ children }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user || user.uid !== import.meta.env.VITE_ADMIN_UID) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedAdminRoute;