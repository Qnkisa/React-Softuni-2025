import CurrencyConverter from "../components/currency-components/CurrencyConverter";
import CurrencyInfo from "../components/currency-components/CurrencyInfo";

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