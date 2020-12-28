import React from "react"
import styled from "@emotion/styled"

const StyledPostLayout = styled.div`
  margin: 0 auto;
  max-width: 60rem;
`

const PostLayout = ({ children }) => {
  return <StyledPostLayout>{children}</StyledPostLayout>
}

export default PostLayout
