import { css } from "styled-components"

export default css`
  .mi-button {
    position: relative;
    padding: 0 30px;
    background: ${props => props.theme.colors.primary};
    color: #ffffff;
    border: 0;
    display: inline-block;
    z-index: 1;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 2px;
    height: ${props => props.theme.variables.inputButtonHeight};
    line-height: ${props => props.theme.variables.inputButtonHeight};
    transition: ${props => props.theme.variables.transition};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: auto;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: #ffffff;
      z-index: -1;
      transform: scaleX(0);
      transform-origin: 0 0;
      transition: ${props => props.theme.variables.transition};
    }

    &:hover {
      color: #ffffff;
    }

    &:hover::before {
      transform: scaleX(1);
    }

    @media ${props => props.theme.device.mobileLg} {
      height: calc(${props => props.theme.variables.inputButtonHeight} - 5);
      line-height: calc(
        ${props => props.theme.variables.inputButtonHeight} - 5
      );
    }
  }

  .mi-readmore {
    position: relative;
    color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.variables.transition};

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: auto;
      bottom: 0;
      height: 1px;
      width: 0;
      background: ${props => props.theme.colors.primary};
      transition: ${props => props.theme.variables.transition};
    }

    &:hover {
      color: ${props => props.theme.colors.primary};

      &::after {
        width: 100%;
      }
    }
  }
`
