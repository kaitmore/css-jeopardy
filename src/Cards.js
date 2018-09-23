import React from "react";
import Card from "./components/Card";
import QuestionCard from "./components/QuestionCard";

function Questions({
  questions,
  selectedCardID,
  onSetSelectedCardID,
  visitedCards = []
}) {
  return (
    <React.Fragment>
      {questions.map(({ q, img, value }, i) => {
        const isSelected = selectedCardID === i;
        return (
          <QuestionCard
            as="button"
            isOpen={isSelected}
            key={`${q}|${value}`}
            onClick={() => onSetSelectedCardID(i)}
            visited={visitedCards.some(card => card === i)}
          >
            {isSelected ? (
              <React.Fragment>
                {q}
                {img && <img src={img} />}
              </React.Fragment>
            ) : (
              `$${value}`
            )}
          </QuestionCard>
        );
      })}
    </React.Fragment>
  );
}

export default Questions;
