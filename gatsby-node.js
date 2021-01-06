const path = require("path")
const blogTemplate = require.resolve("./src/templates/blogTemplate.js")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query orgContentQuery {
      allOrgContent {
        edges {
          node {
            id
            metadata {
              export_file_name
            }
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
      path: `/blog/${node.metadata.export_file_name}`,
      component: blogTemplate,
      context: {
        id: node.id,
      },
    })
  )
}
