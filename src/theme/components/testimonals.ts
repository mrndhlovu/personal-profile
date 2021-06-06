import { css } from "styled-components"

export default css`
  .mi-testimonial {
    .mi-testimonial-slider {
      .slick-list {
        margin-left: -15px;
        margin-right: -15px;
      }

      .slick-list > &:nth-child(1) {
        background: red;
        display: flex !important;
      }
    }

    & {
      margin: 0 15px;
    }

    .mi-testimonial-content {
      min-height: 150px;
      display: flex;
      align-items: center;
      padding: 30px;
      margin-bottom: 35px;
      position: relative;
      border-left: 5px solid ${props => props.theme.colors.border};
      background: ${props => props.theme.colors.bgBody};

      &::after {
        content: "";
        position: absolute;
        left: 30px;
        top: 100%;
        border-style: solid;
        border-width: 12px;
        border-color: ${props => props.theme.colors.border} transparent
          transparent ${props => props.theme.colors.border};
      }

      p {
        margin-bottom: 0;
        font-size: 1.2rem;
      }
    }

    .mi-testimonial-author {
      h5 {
        margin-bottom: 0;
      }

      h6 {
        margin-bottom: 0;
        color: ${props => props.theme.colors.body};
      }
    }

    @media ${props => props.theme.device.laptop} {
      .mi-testimonial-content {
        padding: 20px;
      }
    }

    @media ${props => props.theme.device.tablet} {
      .mi-testimonial-content {
        p {
          font-size: 1.1rem;
        }
      }
    }

    @media ${props => props.theme.device.mobileLg} {
      .mi-testimonial-content {
        p {
          font-size: 1.1rem;
        }
      }
    }

    @media ${props => props.theme.device.mobileSm} {
      .mi-testimonial-content {
        padding: 20px;
      }
    }
  }
`
