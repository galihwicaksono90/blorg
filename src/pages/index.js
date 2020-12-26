import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout.js"
import Header from "../components/Header"

const Home = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Link to="/blog">
        <h1>Blog</h1>
      </Link>
      <Link to="/about">
        <h1>About</h1>
      </Link>
    </Layout>
  )
}

export default Home
