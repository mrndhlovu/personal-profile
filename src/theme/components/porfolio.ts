import { css } from "styled-components"

export default css`
  .mi-portfolio {
    transition: ${props => props.theme.variables.transition};
    visibility: hidden;
    opacity: 0;

    .mi-skill-badge {
      /* background-color: ${props => props.theme.colors.amazon}; */
    }

    &-image {
      display: block;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 15px;
        top: 15px;
        height: calc(100% - 30px);
        width: calc(100% - 30px);
        background: rgba(#ffffff, 0.9);
        transition: ${props => props.theme.variables.transition};
        transform: scaleX(0);
        transform-origin: 0;
      }

      img {
        width: 100%;
      }

      ul {
        margin-bottom: 0;
        padding-left: 0;
        position: absolute;
        left: 0;
        top: 50%;
        text-align: center;
        width: 100%;
        transform: translateY(-50%);
        visibility: hidden;
        opacity: 0;
        margin-top: 30px;
        transition: all 0.4s ease-in-out 0.2s;

        li {
          list-style: none;
          display: inline-block;
          margin: 0 7px;

          a,
          button {
            display: inline-block;
            height: 45px;
            width: 45px;
            padding: 5px 0;
            vertical-align: middle;
            text-align: center;
            line-height: 1;
            background: ${props => props.theme.colors.body};
            color: #ffffff;
            border: 1px solid ${props => props.theme.colors.body};
            border-radius: 100px;
            outline: none;
            font-size: 1.25rem;
            transition: ${props => props.theme.variables.transition};

            svg {
              height: 100%;
            }

            &:hover {
              background: ${props => props.theme.colors.primary};
              border-color: ${props => props.theme.colors.primary};
            }
          }
        }
      }
    }

    h5 {
      color: ${props => props.theme.colors.heading};
      margin-top: 15px;
      margin-bottom: 0;
      font-weight: 700;

      a {
        color: #ffffff;
        transition: ${props => props.theme.variables.transition};

        &:hover {
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    h6 {
      color: ${props => props.theme.colors.body};
      margin-bottom: 0;
    }

    &:hover &-image {
      &::before {
        transform: scaleX(1);
      }

      ul {
        visibility: visible;
        opacity: 1;
        margin-top: 0;
      }
    }

    &.mi-portfolio-visible {
      visibility: visible;
      opacity: 1;
    }
  }
`
