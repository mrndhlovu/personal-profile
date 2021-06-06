import { css } from "styled-components"

export default css`
  .mi-service {
    border: 1px solid ${props => props.theme.colors.border};
    border-top: 5px solid ${props => props.theme.colors.border};
    padding: 30px;
    background: ${props => props.theme.colors.lightBody};
    transition: ${props => props.theme.variables.transition};

    &-icon {
      margin-bottom: 20px;
      display: inline-block;
      color: ${props => props.theme.colors.primary};
      font-size: 2.5rem;
    }

    h5 {
      font-weight: 600;
      position: relative;
      padding-bottom: 15px;
      margin-bottom: 15px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: auto;
        bottom: 0;
        height: 2px;
        width: 50px;
        background: ${props => props.theme.colors.border};
      }
    }

    p {
      margin-bottom: 0;
    }

    &:hover {
      border-top-color: ${props => props.theme.colors.primary};
    }

    @media ${props => props.theme.device.laptop} {
      padding: 20px;
    }

    @media ${props => props.theme.device.mobileSm} {
      padding: 20px;
    }
  }
`
