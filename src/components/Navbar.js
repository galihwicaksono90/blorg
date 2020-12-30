import React from "react"
import styled from "@emotion/styled"

import NavbarItem from "./NavbarItem"
import Burger from "./Burger"

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
      color: ${props => props.theme.colors.magenta};
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
