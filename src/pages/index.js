import React from "react"

import Layout from "../components/Layout.js"
import Header from "../components/Header"

const Home = ({ data }) => {
  return (
    <Layout>
      <Header currentPage={"index"} />
      <h1>Index</h1>
    </Layout>
  )
}

export default Home
