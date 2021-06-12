import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
${props => props.theme.styles.reset};

${props => props.theme.styles.typography};

${props => props.theme.styles.utilities};

${props => props.theme.componentStyles.blog};
${props => props.theme.componentStyles.blogdetails};
${props => props.theme.componentStyles.button};
${props => props.theme.componentStyles.form};
${props => props.theme.componentStyles.header};
${props => props.theme.componentStyles.pagenotfound};
${props => props.theme.componentStyles.pagination};
${props => props.theme.componentStyles.porfolio};
${props => props.theme.componentStyles.skillsChart};
${props => props.theme.componentStyles.resume};
${props => props.theme.componentStyles.service};
${props => props.theme.componentStyles.socialIcons};
${props => props.theme.componentStyles.testimonals};
${props => props.theme.componentStyles.title};

${props => props.theme.styles.light};

`
