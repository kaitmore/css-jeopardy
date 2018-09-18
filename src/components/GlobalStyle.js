import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
}

* {
    color: ${props => props.theme.fontColorB};
    font-family: "Avenir Next";
}
`;

export default GlobalStyle;
