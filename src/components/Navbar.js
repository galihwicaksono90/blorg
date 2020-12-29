import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

const StyledNavbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  & .button {
    display: none;
    background: none;
    border: none;
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 720px) {
    & li {
      display: none;
    }
    & .button {
      display: block;
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

const Burger = ({ sidebarHandler, sidebar }) => {
  return (
    <button className="button" onClick={() => sidebarHandler()}>
      <h2>{sidebar ? <GrClose /> : <GiHamburgerMenu />}</h2>
    </button>
  )
}

const NavbarItem = ({ children, to, className }) => {
  return (
    <StyledNavbarItem>
      <Link to={to}>
        <h3 className={className}>{children}</h3>
      </Link>
    </StyledNavbarItem>
  )
}

const Navbar = ({ currentPage, sidebarHandler, sidebar }) => {
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
      <Burger sidebarHandler={sidebarHandler} sidebar={sidebar} />
    </StyledNavbar>
  )
}

export default Navbar
