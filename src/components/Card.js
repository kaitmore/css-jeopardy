import React from "react";
import styled from "styled-components";

const Card = styled.div`
  align-items: center;
  background-color: ${props => props.theme.backgroundColorB};
  border-radius: 8px;
  border: 4px solid ${props => props.theme.borderColor};
  display: flex;
  font-size: 24px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
`;

export default Card;
