import React, { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

export default function CurrencyConverter() {
    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [loading, setLoading] = useState(true);

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
            <div className="currency-converter-icon">
                <ion-icon name="cash-outline"></ion-icon>
            </div>
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