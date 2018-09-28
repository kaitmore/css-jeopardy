import styled from "styled-components";

const AppWrapper = styled.div`
  height: calc(100vh - 48px);
  background: ${props => props.theme.backgroundColorA};
  padding: 24px;
  position: relative;
`;

export default AppWrapper;
