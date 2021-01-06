import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"

const StyledLayout = styled.div`
  min-height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.colors[props.themeColor].background};
  color: ${props => props.theme.colors[props.themeColor].foreground};

  h1 {
    font-family: ${props => props.theme.fonts.title};
    font-weight: normal;
  }
  h2,
  h3,
  h4,
  h5,
  a,
  p {
    font-family: ${props => props.theme.fonts.main};
  }
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
