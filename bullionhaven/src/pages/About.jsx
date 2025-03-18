import AboutAwards from "../components/AboutAwards";
import AboutHeading from "../components/AboutHeading";
import Offices from "../components/Offices";
import SpotPrices from "../components/SpotPrices";

export default function About(){
    return (
        <section className="about-page">
            <AboutHeading/>
            <Offices/>
            <AboutAwards/>
            <SpotPrices/>
        </section>
    );
}