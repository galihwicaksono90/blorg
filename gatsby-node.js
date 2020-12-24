const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = require.resolve("./src/templates/blogTemplate.js")

  const result = await graphql(`
    query orgContentQuery {
      allOrgContent {
        edges {
          node {
            metadata {
              title
              date(formatString: "DD, MMMM YYYY")
            }
            slug
            html
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic(result.errors)
  }

  result.data.allOrgContent.edges.forEach(({ node }) =>
    createPage({
      path: node.slug,
      component: blogTemplate,
      context: {
        title: node.metadata.title,
        date: node.metadata.date,
        content: node.html,
      },
    })
  )
}
