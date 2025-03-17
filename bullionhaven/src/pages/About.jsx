import AboutAwards from "../components/AboutAwards";
import AboutHeading from "../components/AboutHeading";
import Offices from "../components/Offices";
import SpotPrices from "../components/SpotPrices";

export default function About(){
    return (
        <>
            <AboutHeading/>
            <Offices/>
            <AboutAwards/>
            <SpotPrices/>
        </>
    );
}