import React from "react"
import styled from "@emotion/styled"
import PostTags from "./PostTags"
import { MdDateRange, MdFace, MdQueryBuilder } from "react-icons/md"

const StyledPostTitle = styled.div`
  width: 50rem;
  height: 100%;
  dislay: flex;
  justify-content: flex-start;
  align-items: center;
  margin: ${props => props.theme.spacings.medium} 0;
  color: ${props => props.theme.colors.blue};

  & h1 {
    font-family: ${props => props.theme.fonts.sans};
  }
`
const TitleDescription = styled.div`
  color: ${props => props.theme.colors.cyan};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & h4 {
    margin-left: ${props => props.theme.spacings.xSmall};
  }
`

const PostTitle = ({
  date,
  timeToRead,
  tags,
  title = "Untilted",
  author = "n/a",
}) => {
  return (
    <StyledPostTitle>
      <h1>{title}</h1>
      <TitleDescription>
        <MdFace />
        <h4>{author}</h4>
      </TitleDescription>
      {date && (
        <TitleDescription>
          <MdDateRange />
          <h4>{date}</h4>
        </TitleDescription>
      )}
      {timeToRead && (
        <TitleDescription>
          <MdQueryBuilder />
          <h4>
            {timeToRead} {timeToRead === 1 ? "Minute Read" : "Minutes Read"}
          </h4>
        </TitleDescription>
      )}
      <PostTags tags={tags} />
    </StyledPostTitle>
  )
}

export default PostTitle
