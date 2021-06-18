import path from "path"
import slash from "slash"
import createPaginatedPages from "gatsby-paginate"
import { CreatePagesArgs, GatsbyNode } from "gatsby"
import { WpTermNodeGroupConnection } from "gatsby/gatsby-graphql"

import queries from "./plugins/queries"

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({ actions }) => {
  const redirectOptions = [{ fromPath: "/home", toPath: "/" }]
  const { createRedirect } = actions

  redirectOptions.map(({ fromPath, toPath }) =>
    createRedirect({
      fromPath,
      toPath,
      isPermanent: true,
      redirectInBrowser: true,
    })
  )
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}: CreatePagesArgs) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.tsx")
  const postTemplate = path.resolve("./src/templates/post.tsx")

  const { errors, data } = await graphql(queries)

  if (errors) throw new Error(errors)
  const queryData = data as any

  const posts = queryData?.posts as WpTermNodeGroupConnection

  if (posts.edges.length > 0) {
    createPaginatedPages({
      edges: posts?.edges,
      createPage,
      pathPrefix: `/blog`,
      pageTemplate: slash(blogTemplate),
      pageLength: 10,
    })
  } else {
    createPage({
      path: `/blog`,
      component: slash(blogTemplate),
      context: posts,
    })
  }

  posts.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node?.slug}`,
      component: slash(postTemplate),
      context: edge,
    })
  })
}
