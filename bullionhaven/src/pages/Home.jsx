import HomeHeading from "../components/HomeHeading";
import HomeItems from "../components/HomeItems";
import HomeMessages from "../components/HomeMessages";
import HomeTestimonials from "../components/HomeTestimonials";

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