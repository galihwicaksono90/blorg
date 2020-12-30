import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledSidebar = styled.div`
  height: auto;
  width: 100%;
  display: none;
  position: absolute;
  z-index: 1;
  top: -29%;

  // background-color: ${props => props.theme.colors.light.background};
  background-color: #ebdbb2;
  ${props => console.log(props)};
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: transform 300ms ease-in-out;
    & div {
      margin: ${props => props.theme.spacings.small} auto;
    }
  }
  & a {
    text-decoration: none;
  }
  & h3 {
    color: ${props => props.theme.colors.light.foreground};
    &.active {
      color: ${props => props.theme.colors.magenta};
    }
  }
`
const SidebarItem = ({ children, to, className }) => {
  return (
    <div className={className}>
      <Link to={to}>
        <h3>{children}</h3>
      </Link>
    </div>
  )
}

const Sidebar = ({ currentPage = "", sidebar }) => {
  return (
    <StyledSidebar
      style={{
        transform: `translateY(${sidebar ? "150%" : "0"})`,
      }}
      sidebar={sidebar}
    >
      <SidebarItem to="/" className={currentPage === "index" ? "active" : ""}>
        Home
      </SidebarItem>
      <SidebarItem
        to="/blog"
        className={currentPage === "blog" ? "active" : ""}
      >
        Blog
      </SidebarItem>
      <SidebarItem
        to="/about"
        className={currentPage === "about" ? "active" : ""}
      >
        About
      </SidebarItem>
    </StyledSidebar>
  )
}

export default Sidebar
