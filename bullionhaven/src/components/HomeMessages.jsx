import React, { useEffect, useState } from "react";
import WebsiteSuccessMessage from "./WebsiteSuccessMessage";

export default function HomeMessages(){
    const [showSignInMessage, setShowSignInMessage] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("showSignInSuccess") === "true") {
            setShowSignInMessage(true);
            setTimeout(() => {
                setShowSignInMessage(false);
                localStorage.removeItem("showSignInSuccess");
            }, 2000);
        }
    }, []);

    return (
        <>
            {showSignInMessage && <WebsiteSuccessMessage successMessage="User signed in successfully!"/>}
        </>
    );
}