import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
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

  background-color: ${props => props.theme.colors[props.themeColor].white};
  border-bottom: 2px solid
    ${props => props.theme.colors[props.themeColor].foreground};

  & a {
    text-decoration: none;
  }
  & h3 {
    color: ${props => props.theme.colors[props.themeColor].foreground};
    font-family: ${props => props.theme.fonts.title};
    font-weight: normal;
    &.active {
      color: ${props => props.theme.colors[props.themeColor].magenta};
    }
    &:hover {
      text-decoration: underline;
    }
  }
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

const Sidebar = ({ currentPage = "" }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor, sidebar } = globalState
  return (
    <StyledSidebar sidebar={sidebar} themeColor={themeColor}>
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
