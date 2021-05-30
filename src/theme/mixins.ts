import { css } from "styled-components"

const grid = (placement = "center", align = "center") => css`
  display: grid;
  place-items: ${placement};
  align-items: ${align};
`

const flex = (direction = "row", justify = "center", align = "center") => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`

const textHoverEffect = (color?: string) => css`
  &:hover {
    color: ${color};
    transition-duration: 500ms;
    transition-property: color;
    transition-timing-function: ease-in-out;
  }
`

const transitionEffect = (property?: string) => css`
  transition: 500ms;
  transition-property: ${property};
  transition-timing-function: ease-in-out;
`

const lineClamp = (numberOfLines: number) => css`
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${numberOfLines};
  -webkit-box-orient: vertical;
`

const flexGap = (gap?: string, element?: string) =>
  element
    ? css`
        ${element} {
          margin: ${gap};
        }

        @supports (gap: ${gap}) {
          ${element} {
            margin: 0;
          }
          gap: ${gap};
        }
      `
    : css`
        & > * {
          margin: ${gap};
        }

        @supports (grid-gap: ${gap}) {
          & > * {
            margin: 0;
          }
          grid-gap: ${gap};
        }
      `

export default {
  grid,
  flex,
  textHoverEffect,
  transitionEffect,
  lineClamp,
  flexGap,
}
