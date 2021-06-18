import React, { ReactElement, ReactNode, useCallback, useState } from "react"
import { isEmpty } from "lodash"
import { Maybe, WpPost, SitePageContextGroup } from "gatsby/gatsby-graphql"

import { BlogContext } from "../context"

type PaginatedPosts = Array<{
  node?: WpPost | undefined
}>

export type BlogContextTypes = {
  handleSearch: (data: object) => void
  searchTerm: string
  paginationProps: object
  hasPosts: boolean
  posts?: PaginatedPosts
  handleSearchInput: (term: string) => void
  resetSearch: () => void
}

interface Props {
  children: ReactNode
  paginatedPosts: Maybe<Maybe<SitePageContextGroup>[]> | undefined
  paginationProps: BlogContextTypes["paginationProps"]
}

const BlogProvider = ({
  children,
  paginatedPosts,
  paginationProps,
}: Props): ReactElement => {
  const postsData = paginatedPosts as PaginatedPosts
  const [postList, setPostList] = useState(postsData)
  const [searchTerm, setSearchTerm] = useState("")

  const hasPosts = !isEmpty(postList)

  const handleSearchInput = useCallback(
    ev => setSearchTerm(ev.target.value),
    []
  )

  const handleSearch = useCallback(
    data => {
      const filteredPosts = postList?.filter((post: any) => {
        return Object.values(post.node)
          .join(" ")
          .toLowerCase()
          .includes(data.search.toLowerCase())
      })

      setPostList(filteredPosts)

      return
    },
    [postList]
  )

  const resetSearch = useCallback(() => {
    setPostList(postsData)
  }, [postsData])

  return (
    <BlogContext.Provider
      value={{
        posts: postList,
        handleSearch,
        searchTerm,
        paginationProps,
        hasPosts,
        handleSearchInput,
        resetSearch,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider
