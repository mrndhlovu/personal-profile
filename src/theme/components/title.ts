import { css } from "styled-components"

export default css`
  .mi-sectiontitle {
    margin-bottom: 60px;
    position: relative;
    z-index: 1;

    span {
      position: absolute;
      left: 0;
      top: 100%;
      font-size: 6rem;
      line-height: 1;
      font-weight: 900;
      color: rgba(25, 29, 43, 0.44);
      display: inline-block;
      text-transform: uppercase;
      z-index: -1;
      transform: translateY(-40%);
      user-select: none;
      white-space: nowrap;
    }

    h2 {
      font-weight: 700;
      position: relative;
      padding-bottom: 15px;
      text-transform: uppercase;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: auto;
        bottom: 0;
        height: 5px;
        width: 100px;
        background: rgba(
          ${props => props.theme.variables.primaryLightRgba},
          0.3
        );
        border-radius: 100px;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: auto;
        bottom: 0;
        height: 5px;
        width: 35px;
        background: ${props => props.theme.colors.primary};
        border-radius: 100px;
      }
    }

    @media ${props => props.theme.device.laptop} {
      span {
        font-size: 4.5rem;
      }
    }

    @media ${props => props.theme.device.notebook} {
      span {
        font-size: 4.5rem;
      }
    }

    @media ${props => props.theme.device.tablet} {
      margin-bottom: 50px;

      span {
        font-size: 4.2rem;
      }
    }

    @media ${props => props.theme.device.mobileLg} {
      margin-bottom: 40px;

      span {
        font-size: 3.8rem;
      }
    }

    @media ${props => props.theme.device.mobileSm} {
      span {
        font-size: 3.2rem;
      }
    }
  }

  .mi-smalltitle {
    display: flex;
    align-items: center;

    h4 {
      font-weight: 700;
    }

    &-icon {
      vertical-align: middle;
      margin-right: 10px;
      font-size: 1.71rem;
      line-height: 2.43rem;
      color: $color-body;
    }

    @media ${props => props.theme.device.mobileLg} {
      &-icon {
        font-size: 1.51rem;
        line-height: 2.13rem;
      }
    }
  }
`
