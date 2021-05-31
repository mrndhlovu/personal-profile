import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
${props => props.theme.styles.reset};


${props => props.theme.styles.utilities};

${props => props.theme.styles.light};
${props => props.theme.styles.typography};

`
