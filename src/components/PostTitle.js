import React from "react"
import styled from "@emotion/styled"

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
  & h4 {
    color: ${props => props.theme.colors.brblue};
  }
`

const PostTitle = ({ title = "Untilted", date = "Not Posted Yet" }) => {
  return (
    <StyledPostTitle>
      <h1>{title}</h1>
      <h4>{date}</h4>
    </StyledPostTitle>
  )
}

export default PostTitle
