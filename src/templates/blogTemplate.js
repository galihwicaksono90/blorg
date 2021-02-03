import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Article from "../components/Article"
import Header from "../components/Header"
import PostTitle from "../components/PostTitle"
import HeaderImage from "../components/HeaderImage"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Seo from "../components/Seo"

const BlogTemplate = ({ data }) => {
  const { title, date, tags, image, description } = data.orgContent.metadata
  const { html, timeToRead } = data.orgContent
  return (
    <Layout>
      <Seo
        title={title}
        isBlogPost={true}
        image={image.childImageSharp.fluid}
      />
      <Header currentPage={"index"} />
      <Article>
        <PostTitle
          title={title}
          date={date}
          timeToRead={timeToRead}
          tags={tags}
        />
        {image && (
          <HeaderImage
            image={image.childImageSharp.fluid}
            description={description}
          />
        )}
        <Content content={html} />
        <Footer />
      </Article>
    </Layout>
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
        image {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
        description
      }
    }
  }
`

export default BlogTemplate

//
//
