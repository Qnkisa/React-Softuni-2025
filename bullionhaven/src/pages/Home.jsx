import HomeHeading from "../components/HomeHeading";
import HomeMessages from "../components/HomeMessages";
import SpotPrices from "../components/SpotPrices";

export default function Home(){
    return(
        <>
            <HomeMessages/>
            <HomeHeading/>
            <SpotPrices/>
        </>
    );
}