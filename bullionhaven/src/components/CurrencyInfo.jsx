import CurrencyInfoComponent from "./CurrencyInfoComponent";
import QuestionAnswerComponent from "./QuestionAnswerComponent";
import currencyInfoData from "../data/currencyInfoData";
import currencyQnAData from "../data/currencyQnAData";

export default function CurrencyInfo(){
    return (
        <section className="currency-info">
            <div className="currency-info-components">
                {currencyInfoData.map((info, index) => (
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
                    {currencyQnAData.map((question, index) => (
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