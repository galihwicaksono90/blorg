import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"

const StyledLayout = styled.div`
  min-height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.colors[props.themeColor].background};
  color: ${props => props.theme.colors[props.themeColor].foreground};

  & a {
    text-decoration: none;
    color: ${props => props.theme.colors[props.themeColor].blue};
    &:hover {
      text-decoration: underline;
    }
  }
`

const Layout = ({ children }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return <StyledLayout themeColor={themeColor}>{children}</StyledLayout>
}

export default Layout
