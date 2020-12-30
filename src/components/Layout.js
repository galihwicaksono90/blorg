import React from "react"
import styled from "@emotion/styled"

const Layout = props => {
  return <div className={props.className}>{props.children}</div>
}

const StyledLayout = styled(Layout)`
  font-family: ${props => props.theme.fonts.main};
  min-height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${props => props.theme.spacings.medium};
  background-color: ${props => props.theme.colors.light.background};
  color: ${props => props.theme.colors.light.foreground};
  max-width: 60rem;
  margin: 0 auto;

  & a {
    text-decoration: none;
    color: ${props => props.theme.colors.blue};
  }
`
export default StyledLayout
