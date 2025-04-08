import { useState, useEffect } from "react";
import GoldOre from "../../assets/gold-ore.png";
import SilverOre from "../../assets/silver-ore.webp";
import PaladiumOre from "../../assets/paladium-ore.png";
import CopperOre from "../../assets/copper-ore.webp";

export default function SpotPrices() {
    const api = "https://api.gold-api.com/price/";
    const metals = ["XAU", "XAG", "XPD", "HG"];
    
    const [prices, setPrices] = useState({
        gold: null,
        silver: null,
        palladium: null,
        copper: null
    });

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const responses = await Promise.all(
                    metals.map(metal => fetch(`${api}${metal}`))
                );

                const data = await Promise.all(responses.map(res => res.json()));

                setPrices({
                    gold: data[0].price ? data[0].price.toFixed(2) : "N/A",
                    silver: data[1].price ? data[1].price.toFixed(2) : "N/A",
                    palladium: data[2].price ? data[2].price.toFixed(2) : "N/A",
                    copper: data[3].price ? data[3].price.toFixed(2) : "N/A"
                });
            } catch (error) {
                console.error("Error fetching prices:", error);
            }
        };

        fetchPrices();
    }, []);

    return (
        <div className="spot-prices">
            <div className="spot-prices-info">
                <p>Spot Price (USD for 1 Troy Ounce)</p>
            </div>
            <div className="spot-price-divs">
                <div className="spot-price-div">
                    <img src={GoldOre} alt="" />
                    <p>Gold</p>
                    <span>{prices.gold ? `${prices.gold}$` : "Loading..."}</span>
                </div>
                <div className="spot-price-div">
                    <img src={SilverOre} alt="" />
                    <p>Silver</p>
                    <span>{prices.silver ? `${prices.silver}$` : "Loading..."}</span>
                </div>
                <div className="spot-price-div smaller-image">
                    <img src={PaladiumOre} alt=""/>
                    <p>Palladium</p>
                    <span>{prices.palladium ? `${prices.palladium}$` : "Loading..."}</span>
                </div>
                <div className="spot-price-div">
                    <img src={CopperOre} alt="" />
                    <p>Copper</p>
                    <span>{prices.copper ? `${prices.copper}$` : "Loading..."}</span>
                </div>
            </div>
        </div>
    );
}