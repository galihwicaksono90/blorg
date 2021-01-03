import React from "react"

import Layout from "../components/Layout.js"
import Article from "../components/Article.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <Layout>
      <Header currentPage="index" />
      <Article>
        <PageTitle>Home</PageTitle>
        <Footer />
      </Article>
    </Layout>
  )
}

export default Home
