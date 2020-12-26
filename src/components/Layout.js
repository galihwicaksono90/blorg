import React, { useContext } from "react"
import styled from "@emotion/styled"

const Layout = props => {
  return <div className={props.className}>{props.children}</div>
}

const StyledLayout = styled(Layout)`
  font-family: ${props => props.theme.fonts.main};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${props => props.theme.spacings.large};
  background-color: ${props => props.theme.colors.light.background};
  color: ${props => props.theme.colors.light.foreground};

  & a {
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
    &:visited {
      color: ${props => props.theme.colors.magenta};
    }
  }
`

export default StyledLayout
