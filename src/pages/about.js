import React from "react"
import Layout from "../components/Layout.js"
import Article from "../components/Article.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"
import Seo from "../components/Seo"

const currentPage = "about"
const About = () => {
  return (
    <Layout>
      <Seo title={currentPage} />
      <Header currentPage={currentPage} />
      <Article>
        <PageTitle>About</PageTitle>
        <p>
          You can call this my public personal journal. My interests includes
          everything digital related. My main goal with sharing my thoughts are
          to help others and myself.
        </p>
        <br />
        <p>I hope one day i can configure my own emacs from scratch...</p>
        <Footer />
      </Article>
    </Layout>
  )
}

export default About
