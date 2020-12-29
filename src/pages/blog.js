import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout.js"
import PostCard from "../components/PostCard"
import PostCardContent from "../components/PostCardContent"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"

const Blog = ({ data }) => {
  const { edges } = data.allOrgContent
  return (
    <>
      <Header currentPage={"blog"} />
      <Layout>
        <PageTitle>Blog</PageTitle>
        <PostCard>
          {edges.map(({ node }) => (
            <PostCardContent node={node} key={node.id} />
          ))}
        </PostCard>
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
            tags
          }
        }
      }
    }
  }
`

export default Blog
