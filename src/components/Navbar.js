import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledNavbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    & li {
      display: none;
    }
  }
`
const StyledNavbarItem = styled.li`
  list-style: none;
  margin-right: ${props => props.theme.spacings.small};
  & h3 {
    color: ${props => props.theme.colors.light.foreground};
    &.active {
      color: ${props => props.theme.colors.magenta};
    }
  }
`

const NavbarItem = ({ children, to, className }) => {
  return (
    <StyledNavbarItem>
      <Link to={to}>
        <h3 className={className}>{children}</h3>
      </Link>
    </StyledNavbarItem>
  )
}

const Navbar = ({ currentPage }) => {
  return (
    <StyledNavbar>
      <NavbarItem to="/" className={currentPage === "index" ? "active" : ""}>
        Home
      </NavbarItem>
      <NavbarItem to="/blog" className={currentPage === "blog" ? "active" : ""}>
        Blog
      </NavbarItem>
      <NavbarItem
        to="/about"
        className={currentPage === "about" ? "active" : ""}
      >
        About
      </NavbarItem>
    </StyledNavbar>
  )
}

export default Navbar
