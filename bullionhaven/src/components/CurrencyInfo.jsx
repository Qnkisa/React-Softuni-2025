import CurrencyInfoComponent from "./CurrencyInfoComponent";
import QuestionAnswerComponent from "./QuestionAnswerComponent";

const currencyInfo = [
    {
        infoHeading: "What is a currency?",
        infoText: "In everyday language, currency refers to the monetary unit of another country. However, from an economic perspective, the term has a broader meaning. Let's explore its definition, key aspects—including what an exchange rate is—and understand why even the US dollar is technically considered a currency."
    },
    {
        infoHeading: "Definition of currency",
        infoText: "Currency is the official legal tender and monetary unit of a country, meaning its banknotes and coins. This definition is also found in Bulgarian currency law. There are different types of currency depending on specific criteria. Based on the definition, the Bulgarian Lev serves as the national currency for Bulgarians, while the US dollar is considered an international currency. At the time of writing, the euro functions as both a shared and international currency since it is not legal tender in Bulgaria. If the country joins the Eurozone, the euro will remain a common currency but will no longer be classified as international. The word 'currency' comes from the Latin valere, meaning 'to have value'. After the Renaissance, when Italian city-states dominated European trade, the term spread across Latin-based languages in Europe and later into Slavic languages."
    },
    {
        infoHeading: "Exchange rate",
        infoText: "To understand the value of one currency compared to another, we use exchange rates. These rates indicate how many units of one currency can be exchanged for a specific amount of another. In the United States, the Federal Reserve provides regular updates on exchange rates for major global currencies against the US dollar, along with daily gold prices."
    },
    {
        infoHeading: "Currency name and code",
        infoText: "Every currency has an official name and a unique three-letter code used worldwide. This is important because a country's monetary system can undergo significant changes while retaining the same currency name. The United States provides a relevant example of this.  During the early 20th century, the U.S. experienced major economic shifts, including the abandonment of the gold standard in 1933 and the Bretton Woods system in 1971, which ended the dollar's direct convertibility to gold. Despite these changes, the name 'U.S. dollar' remained unchanged. However, currency codes are sometimes updated. For instance, when the U.S. introduced modern banking and financial standards, it adopted the USD code, which continues to be used globally today."
    },
    {
        infoHeading: "Currency board",
        infoText: "A similar system existed in the United States under the gold standard, where the value of the U.S. dollar was directly tied to a fixed amount of gold. In simple terms, under this structure, the Federal Reserve could not print more dollars unless it had enough gold reserves to back them. This system helped control inflation by limiting the money supply. However, in 1971, the U.S. abandoned the gold standard, allowing the dollar to become a fiat currency, meaning its value is no longer tied to a physical commodity but instead determined by market forces and government policy."
    },
    {
        infoHeading: "Currency market",
        infoText: "The value of one currency against another fluctuates constantly, not just once a day. These changes can benefit or harm different participants in the global foreign exchange market. Individuals, central banks, corporations, investment funds, forex traders, and others are continuously exchanging money. Their goals may vary, including speculation, lending, project financing, or increasing reserves. What matters most is that the currency market plays a crucial role in the global economy and international trade."
    }
];

const currencyQnA = [
    {
      currencyQuestion: "What is the difference between fiat currency and commodity currency?",
      currencyAnswer: "Fiat currency is government-issued money that has value because the government maintains it, while commodity currency is backed by a physical asset like gold or silver. Most modern currencies, including the US dollar and euro, are fiat currencies."
    },
    {
      currencyQuestion: "What affects exchange rates between currencies?",
      currencyAnswer: "Exchange rates fluctuate due to various factors such as inflation, interest rates, economic stability, and geopolitical events. Central banks also influence rates by adjusting monetary policies."
    },
    {
      currencyQuestion: "Why do gold and silver prices impact currency value?",
      currencyAnswer: "Gold and silver often act as safe-haven assets during economic uncertainty. When confidence in fiat currencies drops, investors flock to precious metals, increasing their value while weakening currency strength."
    },
    {
      currencyQuestion: "What does 'strong' and 'weak' currency mean?",
      currencyAnswer: "A 'strong' currency has high purchasing power and can buy more foreign goods and services, while a 'weak' currency has lower purchasing power. Strength or weakness depends on economic performance and global demand."
    },
    {
      currencyQuestion: "What is currency pegging?",
      currencyAnswer: "Currency pegging is when a country fixes its currency's value to another currency or a basket of currencies. This helps stabilize exchange rates but limits a country's monetary policy flexibility."
    },
    {
      currencyQuestion: "How does inflation impact currency value?",
      currencyAnswer: "High inflation reduces a currency's purchasing power, making it less valuable. Low inflation helps maintain currency stability, which is why central banks manage interest rates to control inflation."
    },
    {
      currencyQuestion: "Why do some investors trade foreign currencies?",
      currencyAnswer: "Forex traders and investors trade currencies to profit from price fluctuations, hedge against inflation, or diversify their investment portfolios. The forex market is the largest financial market globally."
    }
];

export default function CurrencyInfo(){
    return (
        <section className="currency-info">
            <div className="currency-info-components">
                {currencyInfo.map((info, index) => (
                    <CurrencyInfoComponent
                        key={index}
                        currencyInfoHeading = {info.infoHeading}
                        currencyInfoText = {info.infoText}
                    />
                    ))}
            </div>
            <div className="currency-info-questions">
                <div className="currency-info-questions-heading">
                    <h4>Frequently asked questions</h4>
                </div>
                <div className="currency-info-questions-div">
                    {currencyQnA.map((question, index) => (
                        <QuestionAnswerComponent
                            key={index}
                            question={question.currencyQuestion}
                            answer={question.currencyAnswer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}