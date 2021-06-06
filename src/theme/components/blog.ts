import { css } from "styled-components"

export default css`
  .mi-blog {
    background: ${props => props.theme.colors.bgBody};
    padding: 15px;

    &-image {
      position: relative;
      overflow: hidden;

      img {
        transition: ${props => props.theme.variables.transition};
        width: 100%;
      }
    }

    &-date {
      position: absolute;
      left: 20px;
      top: 20px;
      background: rgba(${props => props.theme.variables.primaryLightRgba}, 0.8);
      color: #ffffff;
      padding: 10px;
      text-align: center;
      min-width: 80px;
      min-height: 80px;

      span {
        display: block;
      }

      .date {
        font-size: 2.5rem;
        line-height: 1;
        font-weight: 700;
      }

      .month {
        font-size: 1.3rem;
        line-height: 1;
        font-weight: 700;
      }
    }

    &-content {
      padding-top: 15px;

      h5 {
        margin-bottom: 0;
        font-weight: 600;
        margin-bottom: 0;

        a {
          transition: ${props => props.theme.colors.bgBody};
          color: ${props => props.theme.colors.heading};
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }

    &:hover &-image {
      img {
        transform: scale(1.15);
      }
    }
  }
`
