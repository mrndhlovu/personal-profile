import { css } from "styled-components"

export default css`
  .mi-progress {
    &-title {
      font-weight: 600;
      margin-bottom: 0;
    }

    &-inner {
      display: flex;
      align-items: center;
    }

    &-percentage {
      flex: 0 0 60px;
    }

    &-container {
      background: ${props => props.theme.colors.border};
      display: block;
      height: 6px;
      width: 100%;
      position: relative;
    }

    &-active {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background: ${props => props.theme.colors.primary};
      width: 0;
      transition: all 1s cubic-bezier(0.01, 0.57, 0.68, 1.05) 0s;
    }
  }
`
