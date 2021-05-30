import { css } from "styled-components"

const lightStyles = css`
  .light-mode {
    background: rgba(#ffffff, 0.5);
    position: fixed;
    z-index: 999;
    height: 40px;
    left: auto;
    right: 0;
    top: 60px;
    padding: 0 10px;
    display: flex;
    align-items: center;

    .icon {
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
      margin-right: 5px;

      svg {
        fill: #fff;

        & > * {
          fill: #fff;
        }
      }
    }

    &-switch {
      display: inline-block;
      height: 20px;
      width: 40px;
      background: ${props => props.theme.colors.border};
      border-radius: 100px;
      position: relative;
      vertical-align: middle;
      border: 0;

      &::after {
        content: "";
        position: absolute;
        left: 2px;
        top: 2px;
        height: 16px;
        width: 16px;
        border-radius: 100px;
        background: #ffffff;
        transition: ${props => props.theme.variables.transition};
      }

      &.active {
        &::after {
          left: 22px;
          background: ${props => props.theme.colors.primary};
        }
      }
    }

    .light {
      *::-webkit-scrollbar-track {
        background-color: #383838;
      }

      *::-webkit-scrollbar {
        background-color: #383838;
      }

      *::-webkit-scrollbar-thumb {
        background-color: #6b6b6b;
      }

      & {
        color: ${props => props.theme.colors.body};
        background: ${props => props.theme.colors.bgBody};
      }

      @include placeholder-color(${props => props.theme.colors.body});

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${props => props.theme.colors.heading};
      }

      ::-moz-selection {
        background: ${props => props.theme.colors.primary};
        color: #ffffff;
      }

      ::-ms-selection {
        background: ${props => props.theme.colors.primary};
        color: #ffffff;
      }

      ::-o-selection {
        background: ${props => props.theme.colors.primary};
        color: #ffffff;
      }

      ::selection {
        background: ${props => props.theme.colors.primary};
        color: #ffffff;
      }

      input,
      button,
      select,
      textarea {
        border-color: ${props => props.theme.colors.lightBorder};
        color: ${props => props.theme.colors.body};
        @include placeholder-color(${props => props.theme.colors.lightBody});

        &:focus,
        &:active {
          border-color: ${props => props.theme.colors.primary};
        }
      }

      blockquote {
        border-color: ${props => props.theme.colors.primary};
        background: darken(${props => props.theme.colors.lightBody}, 5);

        footer {
          a {
            color: ${props => props.theme.colors.primary};

            &:hover {
              color: ${props => props.theme.colors.primary};
            }
          }
        }
      }

      .stylish-list {
        i {
          color: ${props => props.theme.colors.primary};
        }
      }

      /* Checkbox & Radio Styles */
      input[type="checkbox"],
      input[type="radio"] {
        & ~ label {
          &:before {
            border-color: ${props => props.theme.colors.lightBorder};
          }
        }

        &:checked {
          & ~ label {
            color: ${props => props.theme.colors.primary};

            &:before {
              color: ${props => props.theme.colors.primary};
              border-color: ${props => props.theme.colors.primary};
            }
          }
        }
      }

      input[type="radio"] {
        & ~ label {
          &::before {
            border: 2px solid ${props => props.theme.colors.lightBorder};
          }
        }

        &:checked {
          & ~ label {
            &::before {
              color: ${props => props.theme.colors.primary};
              border-color: ${props => props.theme.colors.primary};
            }
          }
        }
      }

      /**
 * Utilities
 *
 * @format
 */

      .color-theme {
        color: ${props => props.theme.colors.primary};
      }

      .mi-bglines {
        span {
          background: rgba(${props => props.theme.colors.lightBorder}, 0.5);
        }
      }

      .light-mode {
        background: rgba(#000000, 0.5);

        .icon {
          svg {
            fill: #fff;

            & > * {
              fill: #fff;
            }
          }
        }

        &-switch {
          background: ${props => props.theme.colors.lightBorder};

          &::after {
            background: #ffffff;
          }

          &.active {
            &::after {
              background: ${props => props.theme.colors.primary};
            }
          }
        }
      }

      /**
 * Button
 */

      .mi-button {
        background: ${props => props.theme.colors.primary};
        color: #ffffff;

        &::before {
          background: #ffffff;
        }

        &:hover {
          color: #ffffff;
        }
      }

      .mi-readmore {
        color: ${props => props.theme.colors.primary};

        &::after {
          background: ${props => props.theme.colors.primary};
        }

        &:hover {
          color: ${props => props.theme.colors.primary};
        }
      }

      /*
 * Pagination
 */

      .mi-pagination {
        li {
          a {
            border-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
          }

          &.is-active {
            a {
              background: ${props => props.theme.colors.primary};
              color: #ffffff;
            }
          }
        }
      }

      /**
 * Header Styles
 */

      .mi-header {
        background: darken(${props => props.theme.colors.lightBody}, 5);
        border-color: ${props => props.theme.colors.lightBorder};

        &-toggler {
          background: darken(${props => props.theme.colors.lightBody}, 5);

          &:focus {
            border-color: ${props => props.theme.colors.lightBorder};
          }
        }

        &-image {
          border-color: ${props => props.theme.colors.lightBorder};

          a {
            border-color: ${props => props.theme.colors.lightBorder};
          }
        }

        &-menu {
          li {
            a {
              color: ${props => props.theme.colors.body};

              &::before {
                background: rgba($light-color-theme, 0.2);
              }

              &:hover {
                color: ${props => props.theme.colors.primary};
              }

              &.active {
                color: #ffffff;

                &::before {
                  background: ${props => props.theme.colors.primary};
                }
              }
            }
          }
        }

        &-copyright {
          border-color: ${props => props.theme.colors.lightBorder};

          a {
            color: ${props => props.theme.colors.body};

            &:hover {
              color: ${props => props.theme.colors.primary};
            }
          }
        }
      }

      /*
 * Social Icons
 */

      .mi-socialicons {
        li {
          a {
            color: ${props => props.theme.colors.body};

            &:hover {
              color: ${props => props.theme.colors.primary};
            }
          }
        }

        &-bordered {
          li {
            a {
              border-color: ${props => props.theme.colors.lightBorder};

              &:hover {
                border-color: ${props => props.theme.colors.primary};
              }
            }
          }
        }
      }

      /*
 * Title 
 */

      .mi-sectiontitle {
        span {
          color: rgba(215, 220, 230, 0.44);
        }

        h2 {
          &::before {
            background: rgba($light-color-theme, 0.3);
          }

          &::after {
            background: ${props => props.theme.colors.primary};
          }
        }
      }

      .mi-smalltitle {
        &-icon {
          color: ${props => props.theme.colors.body};
        }
      }

      /*
 * Progress Bar
 */

      .mi-progress {
        &-container {
          background: ${props => props.theme.colors.lightBorder};
        }

        &-active {
          background: ${props => props.theme.colors.primary};
        }
      }

      /**
 * Service
 */

      .mi-service {
        border-color: ${props => props.theme.colors.lightBorder};
        background: darken(${props => props.theme.colors.lightBody}, 5);

        &-icon {
          color: ${props => props.theme.colors.primary};
        }

        h5 {
          &::before {
            background: ${props => props.theme.colors.lightBorder};
          }
        }

        &:hover {
          border-top-color: ${props => props.theme.colors.primary};
        }
      }

      /*
 * Portfolio
 */

      .mi-portfolio {
        &-image {
          &::before {
            background: rgba(#ffffff, 0.9);
          }

          ul {
            li {
              a,
              button {
                background: ${props => props.theme.colors.body};
                color: #ffffff;
                border: 1px solid ${props => props.theme.colors.body};

                &:hover {
                  background: ${props => props.theme.colors.primary};
                  border-color: ${props => props.theme.colors.primary};
                }
              }
            }
          }
        }

        h5 {
          color: $light-color-heading;

          a {
            color: $light-color-heading;

            &:hover {
              color: ${props => props.theme.colors.primary};
            }
          }
        }

        h6 {
          color: ${props => props.theme.colors.body};
        }
      }

      /*
 * Resume 
 */

      .mi-resume {
        &-wrapper {
          border-color: ${props => props.theme.colors.lightBorder};
        }

        &-summary {
          &::before {
            background: ${props => props.theme.colors.bgBody};
            border-color: ${props => props.theme.colors.lightBorder};
          }
        }

        &-year {
          color: ${props => props.theme.colors.body};
        }

        &-company {
          color: $light-color-heading;
        }

        &-details {
          &::before {
            background: ${props => props.theme.colors.lightBorder};
          }

          h5 {
            color: ${props => props.theme.colors.primary};
          }
        }
      }

      /**
 * Service
 */

      .mi-testimonial {
        &-content {
          border-color: ${props => props.theme.colors.lightBorder};
          background: darken(${props => props.theme.colors.lightBody}, 5);

          &::after {
            border-color: darken(${props => props.theme.colors.lightBody}, 5)
              transparent transparent
              darken(${props => props.theme.colors.lightBody}, 5);
          }
        }

        &-author {
          h6 {
            color: ${props => props.theme.colors.body};
          }
        }
      }

      /**
 * Form Styles
 */

      .mi-form {
        &-field {
          label {
            background: ${props => props.theme.colors.bgBody};
          }

          input,
          textarea {
            border-color: ${props => props.theme.colors.lightBorder};
          }
        }
      }

      /**
 * Blog Styels
 */

      .mi-blog {
        background: darken(${props => props.theme.colors.lightBody}, 5);

        &-date {
          background: rgba($light-color-theme, 0.8);
          color: #ffffff;
        }

        &-content {
          h5 {
            a {
              color: $light-color-heading;

              &:hover {
                color: ${props => props.theme.colors.primary};
              }
            }
          }
        }
      }

      .notfound {
        &-inner {
          background: darken(${props => props.theme.colors.lightBody}, 5);
        }

        h1 {
          color: #fd7171;
        }
      }

      /*
 * About Styles
 */

      .mi-about {
        &-image {
          &::before {
            background: rgba($light-color-theme, 0.6);
          }

          &::after {
            background: rgba($light-color-theme, 0.6);
          }

          &-icon {
            color: #ffffff;
          }
        }
      }

      /**
 * Contact
 */

      .mi-contact {
        &-infoblock {
          background: rgba(
            darken(${props => props.theme.colors.lightBody}, 5),
            1
          );

          &-icon {
            border-color: ${props => props.theme.colors.lightBorder};
          }

          &-content {
            p {
              a {
                color: ${props => props.theme.colors.body};

                &:hover {
                  color: ${props => props.theme.colors.primary};
                }
              }
            }
          }
        }
      }
    }
  }
`

export default lightStyles
