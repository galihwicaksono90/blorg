import React from "react"
import styled from "@emotion/styled"
import PostTags from "./PostTags"
import { MdDateRange, MdQueryBuilder } from "react-icons/md"

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
const TitleDescriptions = styled.ul`
  display: flex;
  flex-direction: row;
`
const TitleDescription = styled.li`
  color: ${props => props.theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${props => props.theme.spacings.small};
  & h4 {
    margin-left: ${props => props.theme.spacings.xxSmall};
  }
`

const PostTitle = ({ date, timeToRead, tags, title = "Untilted" }) => {
  return (
    <StyledPostTitle>
      <h1>{title}</h1>
      <TitleDescriptions>
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
      </TitleDescriptions>
    </StyledPostTitle>
  )
}

export default PostTitle
