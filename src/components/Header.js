import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Navbar from "./Navbar"

const StyledHeader = styled.div`
  background-color: ${props => props.theme.colors.dark.foreground};
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  border-bottom: solid 2px black;
  color: ${props => props.theme.colors.dark.background};

  & h1 {
    // margin: ${props => props.theme.spacings.small} 0 0 0;
    font-size: 3rem;
    font-family: "Cascadia Code";
  }

  & a,
  a:visited {
    color: ${({ theme }) => theme.colors.blue};
  }
`
const Header = ({ currentPage = "" }) => {
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
    <StyledHeader>
      <Navbar currentPage={currentPage} />
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
    </StyledHeader>
  )
}

export default Header
