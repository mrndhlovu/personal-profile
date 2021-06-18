export default `
{
  posts: allWpPost(filter: {status: {eq: "publish"}}) {
    edges {
      node {
        id
        status
        slug
        excerpt
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
        date(formatString: "ll")
        categories {
          nodes {
            name
            id
            slug
          }
        }
        tags {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
}
`
