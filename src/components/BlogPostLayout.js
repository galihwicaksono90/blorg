import React from "react"
import styled from "@emotion/styled"

const StyledBlogPostLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BlogPostLayout = ({ children }) => {
  return <StyledBlogPostLayout>{children}</StyledBlogPostLayout>
}

export default BlogPostLayout
