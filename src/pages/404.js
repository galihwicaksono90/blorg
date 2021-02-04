import React from "react"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

const Styled404 = styled.div`
  width: 100%;
  height: 100vh;

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`

export default () => (
  <Layout>
    <Helmet>
      <title>Goblorg | 404</title>
    </Helmet>
    <Styled404>
      <h1>404 Page not found</h1>
    </Styled404>
  </Layout>
)
