import { css } from "styled-components"

export default css`
  .notfound {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;

    &-inner {
      background: ${props => props.theme.colors.bgBody};
      padding: 100px 50px;
      width: 100%;
    }

    h1 {
      margin-top: -20px;
      font-size: 12.5rem;
      line-height: 1;
      font-weight: 700;
      color: #fd7171;
    }

    h3 {
      margin-top: -10px;
    }

    .mi-button {
      margin-top: 20px;
    }

    @media ${props => props.theme.device.tablet} {
      h1 {
        font-size: 10.5rem;
      }
    }

    @media ${props => props.theme.device.mobileLg} {
      &-inner {
        padding: 75px 15px;
      }

      h1 {
        margin-top: -15px;
        font-size: 8.5rem;
      }
    }

    @media ${props => props.theme.device.mobileLg} {
      &-inner {
        padding: 65px 15px;
      }

      h1 {
        font-size: 7.5rem;
      }
    }
  }
`
