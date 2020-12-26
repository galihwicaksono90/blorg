const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = require.resolve("./src/templates/blogTemplate.js")

  const result = await graphql(`
    query orgContentQuery {
      allOrgContent {
        edges {
          node {
            id
            slug
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
      path: `/blog${node.slug}`,
      component: blogTemplate,
      context: {
        id: node.id,
      },
    })
  )
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { path } = page
//   console.log("===============================")
//   console.log({ page })
//   console.log("===============================")
// }
