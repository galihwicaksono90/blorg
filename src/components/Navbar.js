import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { Location } from "@reach/router"

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    margin-right: ${props => props.theme.spacings.medium};
  }
`
const StyledHeader = styled.h2`
  color: ${props => props.theme.colors.light.foreground};
  &.active {
    color: ${props => props.theme.colors.magenta};
  }
`

const Navbar = ({ currentPage = "" }) => {
  console.log(currentPage)
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledHeader className={currentPage === "index" && "active"}>
          Home
        </StyledHeader>
      </Link>
      <Link to="/blog">
        <StyledHeader className={currentPage === "blog" && "active"}>
          Blog
        </StyledHeader>
      </Link>
      <Link to="/about">
        <StyledHeader className={currentPage === "about" && "active"}>
          About
        </StyledHeader>
      </Link>
    </StyledNavbar>
  )
}

export default Navbar
