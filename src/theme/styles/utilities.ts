import { css } from "styled-components"

const utilities = css`
  .mi-wrapper {
    padding-left: 300px;
    position: relative;
    min-height: 100vh;
    z-index: 1;

    @media ${props => props.theme.device.laptop} {
      padding-left: 260px;
    }

    @media ${props => props.theme.device.notebook} {
      padding-left: 0;
    }

    @media ${props => props.theme.device.tablet} {
      padding-left: 0;
    }

    @media ${props => props.theme.device.mobileLg} {
      padding-left: 0;
    }
  }

  .color-theme {
    color: ${props => props.theme.colors.primary};
  }

  .mt-30-reverse {
    margin-top: -30px;
  }

  .mt-30 {
    margin-top: 30px;
  }

  .mt-50-reverse {
    margin-top: -50px;
  }

  .mt-50 {
    margin-top: 50px;
  }

  .mi-padding-top {
    padding-top: 120px;

    @media ${props => props.theme.device.tablet} {
      padding-top: 100px;
    }

    @media ${props => props.theme.device.mobileLg} {
      padding-top: 80px;
    }
  }

  .mi-padding-bottom {
    padding-bottom: 120px;

    @media ${props => props.theme.device.tablet} {
      padding-bottom: 100px;
    }

    @media ${props => props.theme.device.mobileLg} {
      padding-bottom: 80px;
    }
  }

  .mi-section {
    position: relative;
  }

  .mi-bglines {
    position: absolute;
    left: 300px;
    top: 0;
    height: 100%;
    min-height: 100vh;
    width: calc(100% - 300px);
    z-index: -1;

    span {
      width: 1px;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 1px;
      min-height: 100vh;
      background: ${props => props.theme.colors.border};

      &:nth-child(1) {
        left: 20%;
      }

      &:nth-child(2) {
        left: 40%;
      }

      &:nth-child(3) {
        left: 60%;
      }

      &:nth-child(4) {
        left: 80%;
      }
    }

    @media ${props => props.theme.device.laptop} {
      left: 260px;
      width: calc(100% - 260px);
    }

    @media ${props => props.theme.device.notebook} {
      left: 0;
      width: 100%;
    }

    @media ${props => props.theme.device.tablet} {
      left: 0;
      width: 100%;
    }

    @media ${props => props.theme.device.mobileLg} {
      left: 0;
      width: 100%;
    }
  }

  .size-md[class^="lni-"],
  .size-lg[class^="lni-"],
  .size-sm[class^="lni-"],
  .size-xs[class^="lni-"] {
    font-size: inherit !important;
  }

  #root {
    position: relative;
  }

  .light-mode {
    background: rgba(255 255 255, 0.5);
    position: fixed;
    z-index: 999;
    height: 40px;
    left: auto;
    right: 0;
    top: 60px;
    padding: 0 10px;
    display: flex;
    align-items: center;

    .icon {
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
      margin-right: 5px;

      svg {
        fill: #fff;

        & > * {
          fill: #fff;
        }
      }
    }

    .light-mode-switch {
      display: inline-block;
      height: 20px;
      width: 40px;
      background: ${props => props.theme.colors.border};
      border-radius: 100px;
      position: relative;
      vertical-align: middle;
      border: 0;

      &::after {
        content: "";
        position: absolute;
        left: 2px;
        top: 2px;
        height: 16px;
        width: 16px;
        border-radius: 100px;
        background: #ffffff;
        transition: ${props => props.theme.variables.transition};
      }

      &.active {
        &::after {
          left: 22px;
          background: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`

export default utilities
