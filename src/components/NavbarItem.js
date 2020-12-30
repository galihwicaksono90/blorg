import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

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

export default NavbarItem
