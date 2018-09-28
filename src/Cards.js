import React from "react";
import QuestionCard from "./components/QuestionCard";

function Questions({ questions, onSetSelectedCardID, visitedCards = [] }) {
  return (
    <React.Fragment>
      {questions.map(({ q, value }, i) => {
        return (
          <QuestionCard
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
