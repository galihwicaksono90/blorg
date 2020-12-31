import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledSidebar = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  transform: translateY(
    ${props => (props.sidebar ? "70px" : "calc(-100%  + 72px)")}
  );

  background-color: ${props => props.theme.colors.brwhite};
  border-bottom: 2px solid #282828;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: transform 300ms ease-in-out;
    box-shadow: ${props => props.theme.shadows.shadow2};
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
    &:hover {
      text-decoration: underline;
    }
  }
`
const SidebarItem = ({ children, to, className }) => {
  return (
    <div className={className}>
      <Link to={to}>
        <h3 className={className}>{children}</h3>
      </Link>
    </div>
  )
}

const Sidebar = ({ currentPage = "", sidebar }) => {
  return (
    <StyledSidebar sidebar={sidebar}>
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
