import React from "react";
import QuestionCard from "./components/QuestionCard";

function Questions({
  questions,
  selectedCardID,
  onSetSelectedCardID,
  visitedCards = []
}) {
  return (
    <React.Fragment>
      {questions.map(({ q, img, value, dailyDouble }, i) => {
        return (
          <QuestionCard
            as="button"
            key={`${q}|${value}`}
            onClick={() => onSetSelectedCardID(String(i))}
            visited={visitedCards.some(card => card === String(i))}
          >
            {`$${value}`}
          </QuestionCard>
        );
      })}
    </React.Fragment>
  );
}

export default Questions;
