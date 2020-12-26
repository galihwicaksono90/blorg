import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Content from "../components/Content"
import BlogPostLayout from "../components/BlogPostLayout"
import PostTitle from "../components/PostTitle"

const BlogTemplate = ({ data }) => {
  const { title, date, author, tags } = data.orgContent.metadata
  const { html, timeToRead } = data.orgContent
  return (
    <Layout>
      <Header />
      <BlogPostLayout>
        <PostTitle
          title={title}
          date={date}
          author={author}
          timeToRead={timeToRead}
          tags={tags}
        />
        <Content content={html} />
      </BlogPostLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    orgContent(id: { eq: $id }) {
      html
      timeToRead
      metadata {
        author
        title
        date(formatString: "DD MMMM YYYY")
        tags
      }
    }
  }
`

export default BlogTemplate
