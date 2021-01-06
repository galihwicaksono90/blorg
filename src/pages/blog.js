import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout.js"
import Article from "../components/Article.js"
import PostCard from "../components/PostCard"
import PostCardContent from "../components/PostCardContent"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

const Blog = ({ data }) => {
  const { edges } = data.allOrgContent
  return (
    <Layout>
      <Header currentPage={"blog"} />
      <Article>
        <PageTitle>Latest Posts</PageTitle>
        <PostCard>
          {edges.map(({ node }) => (
            <PostCardContent node={node} key={node.id} />
          ))}
        </PostCard>
        <Footer />
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query blogQuery {
    allOrgContent(sort: { fields: metadata___date, order: DESC }) {
      edges {
        node {
          id
          timeToRead
          metadata {
            title
            description
            date(formatString: "DD MMMM YYYY")
            tags
            export_file_name
          }
        }
      }
    }
  }
`

export default Blog
