import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"

const StyledPageTitle = styled.h1`
  text-align: left;
  margin: ${props => props.theme.spacings.small} auto;
  width: 100%;
  border-bottom: 2px solid
    ${props => props.theme.colors[props.themeColor].foreground};
`
const PageTitle = ({ children }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState

  return <StyledPageTitle themeColor={themeColor}>{children}</StyledPageTitle>
}

export default PageTitle
