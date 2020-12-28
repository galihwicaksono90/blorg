import React from "react"
import styled from "@emotion/styled"

const StyledPostListItems = styled.ul`
  width: 100%;
  height: auto;
  margin-top: ${props => props.theme.spacings.medium};
  display: flex;
  flex-direction: column;
`

const PostListItems = ({ children }) => {
  return <StyledPostListItems>{children}</StyledPostListItems>
}

export default PostListItems
