import AboutAwards from "../components/about-components/AboutAwards";
import AboutHeading from "../components/about-components/AboutHeading";
import AboutOffices from "../components/about-components/AboutOffices";

export default function About(){
    return (
        <>
            <AboutHeading/>
            <AboutOffices/>
            <AboutAwards/>
        </>
    );
}