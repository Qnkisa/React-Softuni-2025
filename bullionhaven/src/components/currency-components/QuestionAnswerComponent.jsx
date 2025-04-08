import { useState } from "react";

export default function QuestionAnswerComponent({ question, answer }){
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer((prev) => !prev);
    };

    return (
        <div className="question-answer-component">
            <div className={showAnswer ? "qas-question qas-question-active" : "qas-question"} onClick={toggleAnswer}>
                <div className="qas-question-icon"><img src="/website-icons/plus-icon.png" alt="" /></div>
                <p>{question}</p>
            </div>
            {showAnswer && (
                <div 
                    className="qas-answer"
                    style={{
                        opacity: showAnswer ? 1 : 0
                    }}
                >
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}