import React from "react"
import styled from "@emotion/styled"
import PostTitleDescription from "./PostTitleDescription"
import PostTags from "../components/PostTags"

const StyledPostTitle = styled.header`
  width: 100%;
  margin: ${props => props.theme.spacings.small} 0
    ${props => props.theme.spacings.small} 0;

  color: ${props => props.theme.colors.light.foreground};

  & h1 {
    font-family: ${props => props.theme.fonts.sans};
    color: ${props => props.theme.colors.blue};
    font-size: 3rem;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 720px) {
    h1 {
      font-size: 2rem;
    }
  }
`

const PostTitle = ({ date, timeToRead, tags, title = "Untilted" }) => {
  return (
    <StyledPostTitle>
      <h1>{title}</h1>
      <PostTitleDescription date={date} timeToRead={timeToRead} />
      <PostTags tags={tags} />
    </StyledPostTitle>
  )
}

export default PostTitle
