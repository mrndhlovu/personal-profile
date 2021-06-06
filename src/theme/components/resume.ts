import { css } from "styled-components"

export default css`
  .mi-resume {
    &-wrapper {
      border-left: 3px solid ${props => props.theme.colors.border};
    }

    & {
      display: flex;
    }

    &-summary {
      align-self: flex-start;
      flex: 0 0 220px;
      max-width: 220px;
      padding-left: 20px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: -9px;
        top: 6px;
        height: 15px;
        width: 15px;
        border-radius: 100px;
        background: ${props => props.theme.colors.bgBody};
        border: 3px solid ${props => props.theme.colors.border};
      }
    }

    &-year {
      color: ${props => props.theme.colors.body};
      margin-bottom: 0;
    }

    &-company {
      color: #ffffff;
    }

    &-details {
      position: relative;
      padding-left: 50px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        height: 1px;
        width: 30px;
        background: ${props => props.theme.colors.border};
      }

      h5 {
        color: ${props => props.theme.colors.primary};
        margin-bottom: 0;
        font-weight: 700;
      }

      p {
        margin-bottom: 0;
      }
    }

    @media ${props => props.theme.device.notebook} {
      &-summary {
        flex: 0 0 170px;
        max-width: 170px;
      }
    }

    @media ${props => props.theme.device.tablet} {
      &-summary {
        flex: 0 0 170px;
        max-width: 170px;
      }
    }

    @media ${props => props.theme.device.mobileLg} {
      flex-wrap: wrap;

      &-details {
        padding-left: 20px;

        &::before {
          left: 3px;
          top: -15px;
          width: 12px;
        }
      }
    }
  }
`
