import React, { useEffect } from "react";
import WebsiteSuccessMessage from "../message-components/WebsiteSuccessMessage";
import { useAuthContext } from "../../contexts/AuthContext";

export default function HomeMessages() {
    const { showSignInMessage, setShowSignInMessage } = useAuthContext();

    useEffect(() => {
        if (showSignInMessage) {
            const timer = setTimeout(() => {
                setShowSignInMessage(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showSignInMessage, setShowSignInMessage]);

    return (
        <>
            {showSignInMessage && (
                <WebsiteSuccessMessage successMessage="User signed in successfully!" />
            )}
        </>
    );
}