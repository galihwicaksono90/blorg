import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledPostListItem = styled.li`
  list-style: none;
  background-color: #eee;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  padding: ${({ theme }) => theme.spacings.small};
  & h2 {
    font-size: 2rem;
  }
  & a,
  a:visited {
    color: ${({ theme }) => theme.colors.blue};
    &:hover {
      color: ${props => props.theme.colors.green};
      text-decoration: underline;
    }
  }
  & .date {
    font-family: "Cascadia Code";
  }
  & div {
    margin-bottom: 1rem;
  }
`

const PostListItem = ({ node }) => {
  return (
    <StyledPostListItem>
      <div>
        <Link to={`/blog${node.slug}`}>
          <h2>{node.metadata.title}</h2>
        </Link>
        <p className="date">{node.metadata.date}</p>
      </div>
      <p>{node.metadata.description}</p>
    </StyledPostListItem>
  )
}

export default PostListItem
