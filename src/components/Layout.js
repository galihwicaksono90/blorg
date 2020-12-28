import React from "react"
import styled from "@emotion/styled"

const Layout = props => {
  return <div className={props.className}>{props.children}</div>
}

const StyledLayout = styled(Layout)`
  font-family: ${props => props.theme.fonts.main};
  // width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${props => props.theme.spacings.medium};
  padding-top: 0;
  background-color: ${props => props.theme.colors.light.background};
  color: ${props => props.theme.colors.light.foreground};

  & a {
    text-decoration: none;
    color: ${props => props.theme.colors.blue};
  }
`

export default StyledLayout
