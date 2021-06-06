import { css } from "styled-components"

export default css`
  .mi-pagination {
    ul {
      list-style: none;
      margin-top: -5px;
      margin-left: -5px;
    }

    li {
      display: inline-block;
      list-style: none;
      margin-top: 5px;
      margin-left: 5px;

      a {
        display: inline-block;
        border: 1px solid ${props => props.theme.colors.primary};
        height: 40px;
        width: 40px;
        text-align: center;
        color: ${props => props.theme.colors.primary};
        line-height: 38px;
      }

      &.is-active {
        a {
          background: ${props => props.theme.colors.primary};
          color: #ffffff;
        }
      }
    }
  }
`
