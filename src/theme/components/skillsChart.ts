import { css } from "styled-components"

export default css`
  .mi-skills-content {
    width: 100%;
  }

  .chart {
    width: 100%;
    max-height: 30vh;
    ${props => props.theme.mixins.flex()};
  }

  .mi-skills-chart {
    ${props => props.theme.mixins.flex("row", "space-between")};
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`
