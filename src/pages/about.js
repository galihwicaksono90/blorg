import React from "react"
import Layout from "../components/Layout.js"
import Article from "../components/Article.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

const About = () => {
  return (
    <Layout>
      <Header currentPage={"about"} />
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
