import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout.js"
import Header from "../components/Header"

const IndexContent = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacings.medium};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const Home = ({ data }) => {
  return (
    <Layout>
      <Header currentPage="index" />
      <IndexContent>
        <h1>Welcome to Goblorg</h1>
      </IndexContent>
    </Layout>
  )
}

export default Home
