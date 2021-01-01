import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"

const StyledLayoutContainer = styled.div`
  background-color: ${props => props.theme.colors[props.themeColor].background};
  width: 100%;
  height: calc(100% - 74px);

  display: flex;
  flex-direction: column;
`
const StyledLayout = styled.div`
  max-width: 55rem;
  height: 100%;
  width: 100%;
  padding: 0 ${props => props.theme.spacings.small};
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors[props.themeColor].foreground};
  font-family: ${props => props.theme.fonts.main};

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
  return (
    <StyledLayoutContainer themeColor={themeColor}>
      <StyledLayout themeColor={themeColor}>{children}</StyledLayout>
    </StyledLayoutContainer>
  )
}

export default Layout
