export default function CurrencyInfoComponent({currencyInfoHeading, currencyInfoText}){
    return (
        <div className="currency-info-component">
            <p>{currencyInfoHeading}</p>
            <span>{currencyInfoText}</span>
        </div>
    )
}