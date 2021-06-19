import { css } from "styled-components"

export default css`
  .mi-form {
    &-field {
      margin-top: 30px;
      position: relative;

      label {
        position: absolute;
        left: 15px;
        top: -13px;
        background: ${props => props.theme.colors.bgBody};
        transition: ${props => props.theme.variables.transition};
        pointer-events: none;
        padding: 0 10px;
        font-size: 0.94rem;
      }

      input,
      textarea {
        border: 1px solid ${props => props.theme.colors.border};
        font-size: 1rem;
      }
    }

    &-field-error-text {
      font-size: 14px;
      color: ${props => props.theme.colors.reddit};
    }
  }
`
