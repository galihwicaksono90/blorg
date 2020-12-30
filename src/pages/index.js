import React from "react"

import Layout from "../components/Layout.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Header currentPage="index" />
      <Layout>
        <PageTitle>Home</PageTitle>
        <Footer />
      </Layout>
    </>
  )
}

export default Home
