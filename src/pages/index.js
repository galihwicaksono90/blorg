import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"

import Layout from "../components/Layout.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <article>
      <Header currentPage="index" />
      <Layout>
        <PageTitle>Home</PageTitle>
        <Footer />
      </Layout>
    </article>
  )
}

export default Home
