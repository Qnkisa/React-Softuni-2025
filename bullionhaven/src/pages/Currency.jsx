import CurrencyConverter from "../components/CurrencyConverter";
import CurrencyInfo from "../components/CurrencyInfo";

export default function Currency(){
    return (
        <section className="currency-page">
            <div className="currency-block">
                <CurrencyConverter/>
                <CurrencyInfo/>
            </div>
        </section>
    );
}