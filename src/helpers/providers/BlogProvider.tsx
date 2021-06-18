import React, { ReactNode, useCallback, useState } from "react"
import { isEmpty } from "lodash"

import { BlogContext } from "../context"

export type BlogContextTypes = {
  handleSearch: (data: object) => void
  searchTerm: string
  paginationProps: object
  hasPosts: boolean
  paginatedPosts: object
  handleSearchInput: (term: string) => void
  resetSearch: () => void
  posts?: []
}

interface Props {
  children: ReactNode
  paginatedPosts: object
  paginationProps: object
  posts?: []
}

const BlogProvider = ({
  children,
  paginatedPosts,
  paginationProps,
  posts,
}: Props) => {
  const postsInitialState = paginatedPosts || posts?.edges
  const [postList, setPostList] = useState(postsInitialState)
  const [searchTerm, setSearchTerm] = useState("")

  const hasPosts = !isEmpty(postList)

  const handleSearchInput = useCallback(
    ev => setSearchTerm(ev.target.value),
    []
  )

  const handleSearch = useCallback(
    data => {
      const filteredPosts = postList?.filter(post => {
        return Object.values(post.node)
          .join(" ")
          .toLowerCase()
          .includes(data.search.toLowerCase())
      })

      return setPostList(filteredPosts)
    },
    [postList]
  )

  const resetSearch = useCallback(() => {
    setPostList(postsInitialState)
  }, [postsInitialState])

  return (
    <BlogContext.Provider
      value={{
        posts: postList,
        handleSearch,
        searchTerm,
        paginationProps,
        hasPosts,
        paginatedPosts,
        handleSearchInput,
        resetSearch,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider
