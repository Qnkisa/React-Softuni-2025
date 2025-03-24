import HomeHeading from "../components/HomeHeading";
import HomeItems from "../components/HomeItems";
import HomeMessages from "../components/HomeMessages";
import HomeTestimonials from "../components/HomeTestimonials";
import SpotPrices from "../components/SpotPrices";

export default function Home(){
    return(
        <>
            <HomeMessages/>
            <HomeHeading/>
            <HomeItems/>
            <HomeTestimonials/>
            <SpotPrices/>
        </>
    );
}