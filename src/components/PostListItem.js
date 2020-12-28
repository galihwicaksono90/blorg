import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { MdDateRange, MdQueryBuilder } from "react-icons/md"

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
  & div {
    margin-bottom: ${props => props.theme.spacings.xSmall};
  }
`
const StyledPostListDescription = styled.div`
  color: ${props => props.theme.colors.brblue};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${props => props.theme.spacings.small};
  & h4 {
    margin-left: ${props => props.theme.spacings.xxSmall};
  }
`

const PostListItem = ({ node }) => {
  const { title, date, description } = node.metadata
  const { timeToRead } = node
  return (
    <StyledPostListItem>
      <Link to={`/blog${node.slug}`}>
        <h2>{title}</h2>
      </Link>
      <div style={{ display: "flex" }}>
        <StyledPostListDescription>
          <MdDateRange />
          <h4>{date}</h4>
        </StyledPostListDescription>
        <StyledPostListDescription>
          <MdQueryBuilder />
          <h4>
            {timeToRead} {timeToRead === 1 ? "Minute Read" : "Minutes Read"}
          </h4>
        </StyledPostListDescription>
      </div>
      <p>{description}</p>
    </StyledPostListItem>
  )
}

export default PostListItem
