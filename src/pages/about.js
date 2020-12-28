import React from "react"
import Layout from "../components/Layout.js"
import Header from "../components/Header"

const About = () => {
  return (
    <>
      <Header currentPage={"about"} />
      <Layout>
        <h1>About</h1>
      </Layout>
    </>
  )
}

export default About
