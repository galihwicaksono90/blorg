import React from "react"
import styled from "@emotion/styled"

const StyledContent = styled.div`
  width: 50rem;
  & * {
    margin-bottom: ${props => props.theme.spacings.medium};
  }
  & h2 {
    color: ${props => props.theme.colors.blue};
  }
  & p {
    text-indent: 2rem;
  }

  & figure {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    margin-bottom: ${props => props.theme.spacings.small};
    & figcaption,
    img {
      margin-bottom: 0;
    }
    & img {
      max-width: 100%;
    }
  }
  & pre {
    width: 100%;
    padding: ${props => props.theme.spacings.small};
    background: #282828;
    color: #ebdbb2;
    & code {
      font-family: ${props => props.theme.fonts.code};
    }
    &.verse {
      color: red;
      background: white;
    }
  }
`

const Content = ({ content = "<h1>No content yet</h1>" }) => {
  return (
    <StyledContent>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </StyledContent>
  )
}

export default Content
