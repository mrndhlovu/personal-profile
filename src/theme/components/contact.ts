import { css } from "styled-components"

export default css`
  .mi-contact {
    &-info {
      margin-top: -30px;
    }

    &-infoblock {
      margin-top: 30px;
      background: ${props => props.theme.colors.bgDark};
      padding: 30px;
      display: flex;

      &-icon {
        display: inline-block;
        height: 70px;
        width: 70px;
        flex: 0 0 70px;
        max-width: 70px;
        border: 1px solid ${props => props.theme.colors?.border};
        text-align: center;
        line-height: 66px;
        margin-right: 20px;

        svg {
          height: 30px;
          width: 30px;
        }
      }

      &-content {
        h6 {
          margin-top: -5px;
        }

        p {
          margin-bottom: 0;

          a {
            color: ${props => props.theme.colors?.body};
            transition: ${props => props.theme.variables.transition};

            &:hover {
              color: ${props => props.theme.colors?.primary};
            }
          }
        }
      }
    }

    @media ${props => props.theme.device.tablet} {
      &-info {
        margin-top: 50px;
      }
    }

    @media ${props => props.theme.device.mobileLg} {
      &-info {
        margin-top: 50px;
      }
    }

    @media ${props => props.theme.device.mobileSm} {
      &-infoblock {
        padding: 20px;
        flex-wrap: wrap;

        &-icon {
          height: 55px;
          width: 55px;
          flex: 0 0 55px;
          max-width: 55px;
          line-height: 51px;
        }

        &-content {
          margin-top: 20px;
          flex: 0 0 100%;
        }
      }
    }
  }
`
