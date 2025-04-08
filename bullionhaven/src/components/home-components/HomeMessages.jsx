import React, { useEffect, useState } from "react";
import WebsiteSuccessMessage from "../message-components/WebsiteSuccessMessage";

export default function HomeMessages() {
    const [showSignInMessage, setShowSignInMessage] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (localStorage.getItem("showSignInSuccess") === "true") {
            setShowSignInMessage(true);

            timeoutId = setTimeout(() => {
                setShowSignInMessage(false);
                localStorage.removeItem("showSignInSuccess");
            }, 2000);
        }

        return () => {
            // Cleanup the timeout on unmount
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {showSignInMessage && (
                <WebsiteSuccessMessage successMessage="User signed in successfully!" />
            )}
        </>
    );
}