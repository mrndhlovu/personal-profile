import { createContext } from "react"
import { useContext } from "react"

import { BlogContextTypes } from "../providers/BlogProvider"
import {
  DefaultGlobalContextTypes,
  notificationsInitialState,
} from "../providers/GlobalContextProvider"

const GlobalContext = createContext<DefaultGlobalContextTypes>({
  lightMode: false,
  handleModeChange: () => {},
  notifications: notificationsInitialState,
  dismissNotification: () => {},
  notify: () => {},
})

const BlogContext = createContext<BlogContextTypes>({
  handleSearch: () => {},
  searchTerm: "",
  paginationProps: {},
  hasPosts: false,
  handleSearchInput: () => {},
  resetSearch: () => {},
  posts: [],
})

const useGlobalContext = () => useContext(GlobalContext)
const useBlogContext = () => useContext(BlogContext)

export { useGlobalContext, GlobalContext, useBlogContext, BlogContext }
