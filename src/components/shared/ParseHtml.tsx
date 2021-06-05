import React, { ReactNode } from "react"
import parse, { DOMNode, HTMLReactParserOptions } from "html-react-parser"
import Link from "gatsby-link"
import TweetEmbed from "react-tweet-embed"
import { Element } from "domhandler/lib/node"

import { useRelativeUrl } from "src/helpers/hooks"
import { isInternal } from "src/utils"

type AnchorElementProps = {
  children?: ReactNode
  attribs: {
    [name: string]: string
  }
}

const ReactAnchor: React.FC<AnchorElementProps> = ({ children, attribs }) => {
  let { href } = attribs
  let newHref = useRelativeUrl(href)
  if (isInternal(href)) return <Link to={`${newHref}`}>{children}</Link>
  if (!isInternal(href)) return <a href={`${newHref}`}>{children}</a>
  return null
}

const isElement = (domNode: DOMNode): domNode is Element => {
  const isTag = domNode.type === "tag"
  const hasAttributes = (domNode as Element).attribs !== undefined

  return isTag && hasAttributes
}

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (isElement(domNode)) {
      const { attribs } = domNode
      if (attribs?.href) {
        const { children, href } = attribs

        if (
          href.startsWith("https://twitter.com") &&
          attribs?.class === "twitter-tweet"
        ) {
          const urlArray: string[] = href.split("/")
          if (urlArray.length < 6) return null

          const newUrl: string = urlArray[5]
          const urlSearchOptions: string[] = newUrl.split(`?`)

          if (urlSearchOptions.length < 1) return null
          const url: string = urlSearchOptions[0]

          if (url) return <TweetEmbed id={url} />
          return null
        }

        if (href && children) {
          return <ReactAnchor children={children} attribs={attribs} />
        }
      }
    }
  },
}

const ParseHTML = (html: string) => {
  const clean = parse(html, options)
  return clean
}

export default ParseHTML
