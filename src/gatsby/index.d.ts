type EdgeNode = {
  next?: EdgeNode
  node: SitePlugin
  previous?: EdgeNode
}

const createPage: <any>(
  args: Page<any>,
  plugin?: ActionPlugin | undefined,
  option?: ActionOptions | undefined
) => void

declare module "gatsby-paginate" {
  type CreatePaginationTypes = {
    edges: Array<WpTermNodeEdge>
    createPage: createPage
    pageTemplate: string
    pageLength: number
    pathPrefix: string
  }
  const createPaginatedPages: (options: CreatePaginationTypes) => void
  export default createPaginatedPages
}
