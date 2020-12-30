import React from "react"
import styled from "@emotion/styled"

const StyledPostLayout = styled.article`
  // margin: 0 auto;
`

const PostLayout = ({ children }) => {
  return <StyledPostLayout>{children}</StyledPostLayout>
}

export default PostLayout
