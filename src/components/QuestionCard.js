import styled, { css, keyframes } from "styled-components";

import Card from "./Card";

const QuestionCard = styled(Card)`
  font-size: 64px;
  color: ${props => props.theme.fontColorA};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.2);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 12px 6px #eab76f;
  }

  visibility: ${props => props.visited && "hidden"};

  ${props =>
    props.isOpen &&
    css`
      animation: ${rotate180} 0.3s linear;
      color: ${props => props.theme.fontColorB};
      visibility: visible;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      padding: 100px;
      background: ${props => props.theme.backgroundColorC};
      &:hover {
        transform: unset;
        background-color: ${props => props.theme.backgroundColorB};
      }
    `};
`;

const rotate180 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

export default QuestionCard;
