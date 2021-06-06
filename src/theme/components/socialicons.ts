import { css } from "styled-components"

export default css`
  .mi-socialicons {
    padding-left: 0;
    margin-bottom: 0;

    li {
      list-style: none;
      display: inline-block;
      margin: 0 8px;

      a {
        display: inline-block;
        transition: ${props => props.theme.variables.transition};
        color: $color-body;
        font-size: 1.5rem;

        &:hover {
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    &-bordered {
      li {
        a {
          height: 45px;
          width: 45px;
          line-height: 1;
          text-align: center;
          border: 2px solid ${props => props.theme.colors.border};
          border-radius: 100px;
          line-height: 45px;
          font-size: 1.3rem;

          svg {
            max-height: 100%;
          }

          &:hover {
            border-color: ${props => props.theme.colors.primary};
          }
        }
      }
    }

    @media ${props => props.theme.device.tablet} {
      &-bordered {
        li {
          a {
            height: 42px;
            width: 42px;
            line-height: 42px;
            font-size: 1.1rem;
          }
        }
      }
    }

    @media ${props => props.theme.device.mobileLg} {
      li {
        a {
          font-size: 1.25rem;
        }
      }

      &-bordered {
        li {
          a {
            height: 38px;
            width: 38px;
            line-height: 38px;
            font-size: 1rem;
          }
        }
      }
    }
  }
`
