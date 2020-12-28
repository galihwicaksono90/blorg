import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Navbar from "./Navbar"

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.dark.foreground};

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
    <StyledHeader currentPage={currentPage}>
      <Navbar currentPage={currentPage} />
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
    </StyledHeader>
  )
}

export default Header
