import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import PostTags from "./PostTags"
import PostListDescription from "./PostListDescription"

const StyledPostListItem = styled.li`
  list-style: none;
  background-color: #ebdbb2;
  padding: ${({ theme }) => theme.spacings.small};
  box-shadow: ${props => props.theme.shadows.shadow2};
  min-height: 13rem;
  border: 2px solid #282828;

  display: flex;
  flex-direction: column;
  & .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    & p {
    }
  }

  & > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.small};
  }

  & .title {
    margin-bottom: 0;
  }

  & a,
  a:visited {
    color: ${({ theme }) => theme.colors.light.foreground};
    &:hover {
      color: ${props => props.theme.colors.blue};
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 800px) {
    min-height: 10rem;
  }
`

const PostCard = ({ node }) => {
  const { title, date, description, tags } = node.metadata
  const { timeToRead } = node
  return (
    <StyledPostListItem>
      <Link to={`/blog${node.slug}`} className="title">
        <h2>{title}</h2>
      </Link>
      <PostListDescription date={date} timeToRead={timeToRead} />
      <div className="desc">{description}</div>
      <PostTags tags={tags} />
    </StyledPostListItem>
  )
}

export default PostCard
