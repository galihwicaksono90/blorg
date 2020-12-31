import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import PostTitle from "../components/PostTitle"
import HeaderImage from "../components/HeaderImage"
import Content from "../components/Content"
import Footer from "../components/Footer"

const BlogTemplate = ({ data }) => {
  const {
    title,
    date,
    tags,
    image__https,
    description,
  } = data.orgContent.metadata
  const { html, timeToRead } = data.orgContent
  return (
    <article>
      <Header currentPage={"blog"} />
      <Layout>
        <article>
          <PostTitle
            title={title}
            date={date}
            timeToRead={timeToRead}
            tags={tags}
          />
          {image__https && (
            <HeaderImage image={image__https} description={description} />
          )}
          <Content content={html} />
        </article>
        <Footer />
      </Layout>
    </article>
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
        description
      }
    }
  }
`

export default BlogTemplate
