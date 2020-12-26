import React from "react"
import styled from "@emotion/styled"

const StyledListItems = styled.ul`
  width: 100%;
  height: auto;
  // padding: 0 ${props => props.theme.spacings.medium};
  margin-top: ${props => props.theme.spacings.medium};
`

const ListItems = ({ children }) => {
  return <StyledListItems>{children}</StyledListItems>
}

export default ListItems
