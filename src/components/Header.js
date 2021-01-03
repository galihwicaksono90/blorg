import React, { useState, useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const MainHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  border-bottom: solid 2px
    ${props => props.theme.colors[props.themeColor].foreground};
  box-shadow: ${props => props.theme.shadows.shadow2};
`
const StyledHeader = styled.div`
  height: 72px;
  padding: 0 ${props => props.theme.spacings.medium};

  background-color: ${props => props.theme.colors[props.themeColor].white};

  display: flex;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-size: 2rem;
    color: ${props => props.theme.colors[props.themeColor].blue};
  }

  & a {
    text-decoration: none;
  }

  @media screen and (max-width: 720px) {
    box-shadow: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-bottom: none;
    height: 70px;
  }
`

const Header = ({ currentPage = "" }) => {
  const [sidebar, setSidebar] = useState(false)
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState

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
    <MainHeader themeColor={themeColor}>
      <StyledHeader currentPage={currentPage} themeColor={themeColor}>
        <Navbar
          currentPage={currentPage}
          sidebarHandler={() => setSidebar(!sidebar)}
          sidebar={sidebar}
        />
        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
      </StyledHeader>
      <Sidebar currentPage={currentPage} sidebar={sidebar} />
    </MainHeader>
  )
}

export default Header
