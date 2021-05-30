import styled from "styled-components"

const Styles = styled.div`
  .mi-home {
    &-area {
      ${props => props.theme.mixins.flex()};
      min-height: 100vh;
      position: relative;
      z-index: 1;
    }

    &-particle {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
    }

    &-content {
      text-align: center;
      padding: 50px 80px;

      h1 {
        font-weight: 700;
      }

      p {
        margin-top: 15px;
        font-size: 1.25rem;
        line-height: 2rem;
      }

      .mi-socialicons {
        margin-top: 20px;
      }
    }

    @media #{${props => props.theme.device.laptop}} {
      &-content {
        padding: 50px 0px;
      }
    }

    @media #{${props => props.theme.device.notebook}} {
      &-content {
        padding: 50px 0px;
      }
    }

    @media #{${props => props.theme.device.tablet}} {
      &-content {
        padding: 50px 0px;

        p {
          font-size: 1.15rem;
          line-height: 1.75rem;
        }
      }
    }

    @media #{${props => props.theme.device.mobileLg}} {
      &-content {
        padding: 50px 0px;

        p {
          font-size: 1.08rem;
          line-height: 1.55rem;
        }
      }
    }

    @media #{${props => props.theme.device.mobileSm}} {
      &-content {
        h1 {
          span {
            display: block;
          }
        }
      }
    }
  }
`

export default Styles
