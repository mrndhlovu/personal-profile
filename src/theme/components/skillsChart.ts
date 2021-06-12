import { css } from "styled-components"

export default css`
  .mi-skills-content {
    ${props => props.theme.mixins.flex("row", "space-between")};
    flex-wrap: wrap;
    width: 100%;
  }

  .mi-skills-chart {
  }
`
