import React from "react"
import styled from "@emotion/styled"
import { MdDateRange, MdQueryBuilder } from "react-icons/md"
// import PostTags from "./PostTags"

const StyledPostListDescriptions = styled.div`
  display: flex;
`

const StyledPostListDescription = styled.div`
  color: ${props => props.theme.colors.brblue};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${props => props.theme.spacings.small};
  & p {
    margin-left: ${props => props.theme.spacings.xxSmall};
    font-size: 0.9rem;
  }
`

const PostListDesctiptions = ({ date = "n/a", timeToRead }) => {
  return (
    <StyledPostListDescriptions>
      <StyledPostListDescription>
        <MdDateRange />
        <p> {date}</p>
      </StyledPostListDescription>
      <StyledPostListDescription>
        {timeToRead && (
          <>
            <MdQueryBuilder />
            <p>
              {timeToRead} {timeToRead === 1 ? " Minute Read" : "Minutes Read"}
            </p>
          </>
        )}
      </StyledPostListDescription>
    </StyledPostListDescriptions>
  )
}

export default PostListDesctiptions
