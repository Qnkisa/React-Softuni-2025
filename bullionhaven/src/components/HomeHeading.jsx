import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

export default function HomeHeading(){
    return (
        <section className="home-heading">
            <div className="home-heading-blur"></div>
            <div className="home-heading-helper">
                <h1>Gold Rush</h1>
                <h2>Discover a world of secure investment opportunities with our premium collection of gold and silver bullion products. Whether you're a seasoned investor or just beginning your journey, we offer a wide selection of high-quality bullion coins and bars. Our offerings include products from some of the most trusted mints,  pure gold and silver at competitive prices.</h2>
                <div className="home-heading-cta">
                    <Link to="/products">Buy Now</Link>
                </div>
            </div>
        </section>
    )
}