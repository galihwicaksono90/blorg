import React from "react"
import styled from "@emotion/styled"
import PostTags from "./PostTags"
import PostTitleDescription from "./PostTitleDescription"

const StyledPostTitle = styled.header`
  width: 100%;
  height: 100%;
  margin: ${props => props.theme.spacings.medium} 0
    ${props => props.theme.spacings.medium} 0;

  color: ${props => props.theme.colors.light.foreground};

  & h1 {
    font-family: ${props => props.theme.fonts.sans};
  }
`

const PostTitle = ({ date, timeToRead, tags, title = "Untilted" }) => {
  return (
    <StyledPostTitle>
      <h1>{title}</h1>
      <PostTitleDescription date={date} timeToRead={timeToRead} />
    </StyledPostTitle>
  )
}

export default PostTitle
