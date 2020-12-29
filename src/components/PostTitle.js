import React from "react"
import styled from "@emotion/styled"
import PostTitleDescription from "./PostTitleDescription"

const StyledPostTitle = styled.header`
  width: 100%;
  height: 100%;
  margin: ${props => props.theme.spacings.medium} 0
    ${props => props.theme.spacings.medium} 0;

  color: ${props => props.theme.colors.light.foreground};

  & h1 {
    font-family: ${props => props.theme.fonts.sans};
    color: ${props => props.theme.colors.blue};
    font-size: 3rem;
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
