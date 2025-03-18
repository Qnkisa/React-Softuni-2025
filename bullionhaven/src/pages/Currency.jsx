import CurrencyConverter from "../components/CurrencyConverter";
import CurrencyInfo from "../components/CurrencyInfo";
import SpotPrices from "../components/SpotPrices";

export default function Currency(){
    return (
        <section className="currency-page">
            <h1 className="currency-heading page-heading">Convert currencies online</h1>
            <div className="currency-block">
                <CurrencyConverter/>
                <CurrencyInfo/>
            </div>
            <SpotPrices/>
        </section>
    );
}