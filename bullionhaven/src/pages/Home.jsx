import HomeHeading from "../components/home-components/HomeHeading";
import HomeItems from "../components/home-components/HomeItems";
import HomeMessages from "../components/home-components/HomeMessages";
import HomeTestimonials from "../components/home-components/HomeTestimonials";

export default function Home(){
    return(
        <>
            <HomeMessages/>
            <HomeHeading/>
            <HomeItems/>
            <HomeTestimonials/>
        </>
    );
}