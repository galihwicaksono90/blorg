import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout.js"
import ListItems from "../components/ListItems"
import ListItem from "../components/ListItem"
import Header from "../components/Header"

const Blog = ({ data }) => {
  const { siteMetadata } = data.site
  const { edges } = data.allOrgContent
  return (
    <Layout>
      <Header currentPage={"blog"} />
      <ListItems>
        {edges.map(({ node }) => (
          <ListItem node={node} key={node.id} />
        ))}
      </ListItems>
    </Layout>
  )
}

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allOrgContent {
      edges {
        node {
          id
          slug
          metadata {
            title
            description
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`

export default Blog
