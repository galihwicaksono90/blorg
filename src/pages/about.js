import React from "react"
import Layout from "../components/Layout.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"

const About = () => {
  return (
    <>
      <Header currentPage={"about"} />
      <Layout>
        <PageTitle>About</PageTitle>
      </Layout>
    </>
  )
}

export default About
