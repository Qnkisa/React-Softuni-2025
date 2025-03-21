import React, { useEffect, useState } from "react";
import SignInSuccessMessage from "../components/SignInSucessMessage";

export default function HomeMessages(){
    const [showSignInMessage, setShowSignInMessage] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("showSignInSuccess") === "true") {
            setShowSignInMessage(true);
            setTimeout(() => {
                setShowSignInMessage(false);
                localStorage.removeItem("showSignInSuccess");
            }, 3000);
        }
    }, []);

    return (
        <>
            {showSignInMessage && <SignInSuccessMessage />}
        </>
    );
}