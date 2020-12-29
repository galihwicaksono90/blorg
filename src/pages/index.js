import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"

const Home = ({ data }) => {
  return (
    <>
      <Header currentPage="index" />
      <Layout>
        <PageTitle>Home</PageTitle>
      </Layout>
    </>
  )
}

export default Home
