import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout.js"
import styled from "@emotion/styled"

const Home = ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <div>
        <h1>Hello World</h1>
        <ul>
          {data.allOrgContent.edges.map(edge => (
            <li>
              <Link to={edge.node.slug}>{edge.node.metadata.title}</Link>
            </li>
          ))}
        </ul>
      </div>
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
          slug
          metadata {
            title
          }
        }
      }
    }
  }
`

export default Home
