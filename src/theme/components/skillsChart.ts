import { css } from "styled-components"

export default css`
  .mi-skills {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }
  }
`
