import React from "react"
import styled from "@emotion/styled"

const StyledPostListItems = styled.ul`
  width: 100%;
  height: auto;
  // padding: 0 ${props => props.theme.spacings.medium};
  margin-top: ${props => props.theme.spacings.medium};
`

const PostListItems = ({ children }) => {
  return <StyledPostListItems>{children}</StyledPostListItems>
}

export default PostListItems
