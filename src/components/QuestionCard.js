import styled, { css, keyframes } from "styled-components";

import Card from "./Card";

const QuestionCard = styled(Card)`
  font-size: 64px;
  flex-direction: column;
  justify-content: space-around;
  color: ${props => props.theme.fontColorA};
  cursor: pointer;

  img {
    max-height: 300px;
  }

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.2);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 12px 6px #eab76f;
  }

  visibility: ${props => props.visited && "hidden"};
`;

export default QuestionCard;
