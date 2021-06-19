import { graphql, useStaticQuery } from "gatsby"
import { useEffect, useRef } from "react"

type WPURLFunction = () => string

const WPURLData: WPURLFunction = () => {
  const { wp } = useStaticQuery(
    graphql`
      query WPURL {
        wp {
          generalSettings {
            url
          }
        }
      }
    `
  )
  return wp.generalSettings.url
}

export const useRelativeUrl = (url: string) => {
  if (!url) return undefined

  let WPURL = WPURLData()
  WPURL = WPURL.slice(0, -3)
  let string = url

  if (url.startsWith(`/`)) return url
  string = string.replace(WPURL, "")
  return string
}

export const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
