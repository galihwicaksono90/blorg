import React from "react"
import Layout from "../components/Layout.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
      <Header currentPage={"about"} />
      <Layout>
        <PageTitle>About</PageTitle>
        <p>asdf</p>
        <Footer />
      </Layout>
    </>
  )
}

export default About
