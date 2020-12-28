import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout.js"
import PostListItems from "../components/PostListItems"
import PostListItem from "../components/PostListItem"
import Header from "../components/Header"

const Blog = ({ data }) => {
  const { edges } = data.allOrgContent
  return (
    <>
      <Header currentPage={"blog"} />
      <Layout>
        <PostListItems>
          {edges.map(({ node }) => (
            <PostListItem node={node} key={node.id} />
          ))}
        </PostListItems>
      </Layout>
    </>
  )
}

export const query = graphql`
  query blogQuery {
    allOrgContent(sort: { fields: metadata___date, order: DESC }) {
      edges {
        node {
          id
          slug
          timeToRead
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
