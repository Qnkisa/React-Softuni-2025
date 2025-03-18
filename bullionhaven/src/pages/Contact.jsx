import ContactHeading from "../components/ContactHeading";
import ContactOffices from "../components/ContactOffices"
import SpotPrices from "../components/SpotPrices";

export default function Contact(){
    return (
        <section className="contact-page">
            <ContactHeading/>
            <ContactOffices/>
            <SpotPrices/>
        </section>
    );
}