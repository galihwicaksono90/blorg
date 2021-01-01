import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import PostTags from "./PostTags"
import PostListDescription from "./PostListDescription"

const StyledPostListItem = styled.li`
  list-style: none;
  background-color: ${props => props.theme.colors[props.themeColor].white};
  padding: ${props => props.theme.spacings.small};
  box-shadow: ${props => props.theme.shadows.shadow2};
  min-height: 13rem;
  border: 2px solid ${props => props.theme.colors[props.themeColor].foreground};

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
    color: ${props => props.theme.colors[props.themeColor].foreground};
    &:hover {
      color: ${props => props.theme.colors[props.themeColor].blue};
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 800px) {
    min-height: 10rem;
  }
`

const PostCard = ({ node }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  const { title, date, description, tags } = node.metadata
  const { timeToRead } = node
  return (
    <StyledPostListItem themeColor={themeColor}>
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
