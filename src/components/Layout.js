import React from "react"
import styled from "@emotion/styled"

const Layout = props => {
  return <div className={props.className}>{props.children}</div>
}

const StyledLayout = styled(Layout)`
  min-height: calc(100% - 70px);
  max-width: 55rem;
  padding: 0 ${props => props.theme.spacings.small};
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  // background-color: ${props => props.theme.colors.light.background};
  color: ${props => props.theme.colors.light.foreground};
  font-family: ${props => props.theme.fonts.main};

  & a {
    text-decoration: none;
    color: ${props => props.theme.colors.blue};
  }
`
export default StyledLayout
