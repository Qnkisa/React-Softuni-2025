import React, { useState, useEffect } from "react";

const API_URL = "https://v6.exchangerate-api.com/v6/3734f1dfade0bb5c6db5ad53/latest/USD";

export default function CurrencyConverter() {
    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [loading, setLoading] = useState(true);

    //fetching new apis only if the data is updated
    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                
                if (data.result === "success") {
                    const today = new Date().toISOString().split("T")[0];
                    localStorage.setItem("exchangeRates", JSON.stringify({
                        rates: data.conversion_rates,
                        date: today
                    }));
                    setRates(data.conversion_rates);
                }
            } catch (error) {
                console.error("Failed to fetch exchange rates", error);
            } finally {
                setLoading(false);
            }
        };

        const storedData = localStorage.getItem("exchangeRates");
        if (storedData) {
            const { rates, date } = JSON.parse(storedData);
            const today = new Date().toISOString().split("T")[0];

            if (date === today) {
                setRates(rates);
                setLoading(false);
                return;
            }
        }

        fetchRates();
    }, []);

    
    useEffect(() => {
        if (rates[fromCurrency] && rates[toCurrency]) {
            const converted = (amount * rates[toCurrency]) / rates[fromCurrency];
            setConvertedAmount(converted);
        }
    }, [amount, fromCurrency, toCurrency, rates]);

    if (loading) return <p>Loading exchange rates...</p>;

    return (
        <section className="currency-converter">
            <h2>Currency Converter</h2>
            <div className="converter-flex">
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} 
                    min="0"
                />
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    {Object.keys(rates).map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <span>to</span>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    {Object.keys(rates).map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
            <h3>
                {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
            </h3>
        </section>
    );
}