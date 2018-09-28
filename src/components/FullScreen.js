import styled, { css, keyframes } from "styled-components";
import QuestionCard from "./QuestionCard";

const rotate180 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const FullScreen = styled(QuestionCard)`
  padding: 100px 0;
  animation: ${rotate180} 0.2s linear;
  display: flex;
  justify-content: space-around;
  color: ${props => props.theme.fontColorB};
  position: absolute;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.backgroundColorC};
  &:hover {
    transform: unset;
    background-color: ${props => props.theme.backgroundColorB};
  }

  ${props =>
    props.isDailyDouble &&
    css`
    background-color: red;
      :before {
        content: "DAILY DOUBLE";
        position: absolute;
        top: 24px
        font-size: 24px;
      }
      &:hover {
        transform: unset;
        background-color: red;
      }
    `};
`;

export default FullScreen;
