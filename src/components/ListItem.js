import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledListItem = styled.li`
  list-style: none;
  background-color: #eee;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  padding: ${({ theme }) => theme.spacings.small};
  & h2 {
    font-size: 2rem;
  }
  & a {
    color: ${({ theme }) => theme.colors.blue};
  }
  & a:visited {
    color: ${({ theme }) => theme.colors.blue};
  }
  & .date {
    font-family: "Cascadia Code";
  }
  & div {
    margin-bottom: 1rem;
  }
`

const ListItem = ({ node }) => {
  return (
    <StyledListItem>
      <div>
        <Link to={node.slug}>
          <h2>{node.metadata.title}</h2>
        </Link>
        <p className="date">{node.metadata.date}</p>
      </div>
      <p>{node.metadata.description}</p>
    </StyledListItem>
  )
}

export default ListItem
