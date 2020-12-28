import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const MainHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
`
const StyledHeader = styled.div`
  background-color: ${props => props.theme.colors.dark.foreground};
  & a {
    text-decoration: none;
  }

  width: 100%;
  height: auto;
  padding: ${props => props.theme.spacings.small}
    ${props => props.theme.spacings.medium};

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  border-bottom: solid 2px black;
  color: ${props => props.theme.colors.dark.background};
  & h1 {
    font-size: 2rem;
    color: ${props => props.theme.colors.blue};
  }
`

const Header = ({ currentPage = "" }) => {
  const [sidebar, setSidebar] = useState(false)

  const data = useStaticQuery(graphql`
    query headerQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <MainHeader>
      <StyledHeader currentPage={currentPage}>
        <Navbar
          currentPage={currentPage}
          sidebarHandler={() => setSidebar(!sidebar)}
          sidebar={sidebar}
        />
        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
      </StyledHeader>
      <Sidebar sidebar={sidebar} currentPage={currentPage} />
    </MainHeader>
  )
}

export default Header
