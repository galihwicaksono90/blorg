import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Content from "../components/Content"
import PostLayout from "../components/PostLayout"
import PostTitle from "../components/PostTitle"
// import HeaderImage from "../components/HeaderImage"

const BlogTemplate = ({ data }) => {
  const { title, date, tags, image__https } = data.orgContent.metadata
  const { html, timeToRead } = data.orgContent
  console.log(image__https)
  return (
    <>
      <Header currentPage={"blog"} />

      <Layout>
        <PostLayout>
          <PostTitle
            title={title}
            date={date}
            timeToRead={timeToRead}
            tags={tags}
          />
          <Content content={html} />
        </PostLayout>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    orgContent(id: { eq: $id }) {
      html
      timeToRead
      metadata {
        title
        date(formatString: "DD MMMM YYYY")
        tags
        image__https
      }
    }
  }
`

export default BlogTemplate
