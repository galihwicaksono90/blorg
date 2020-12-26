import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Content from "../components/Content"
import BlogPostLayout from "../components/BlogPostLayout"
import PostTitle from "../components/PostTitle"

const BlogTemplate = ({ data }) => {
  console.log(data)
  const { title, date } = data.orgContent.metadata
  const { html } = data.orgContent
  return (
    <Layout>
      <Header />
      <BlogPostLayout>
        <PostTitle title={title} date={date} />
        <Content content={html} />
      </BlogPostLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    orgContent(id: { eq: $id }) {
      html
      metadata {
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`

export default BlogTemplate
