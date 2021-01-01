import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledNavbarItem = styled.li`
  list-style: none;
  margin-right: ${props => props.theme.spacings.small};
  outline: none;
  & h3 {
    color: ${props => props.theme.colors[props.themeColor].foreground};
    outline: none;
    &.active {
      color: ${props => props.theme.colors[props.themeColor].magenta};
    }
    &:hover {
      text-decoration: underline;
    }
  }
`

const NavbarItem = ({ children, to, className }) => {
  const { globalState, globalDispatch } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <StyledNavbarItem themeColor={themeColor}>
      <Link to={to}>
        <h3 className={className}>{children}</h3>
      </Link>
    </StyledNavbarItem>
  )
}

export default NavbarItem
