import React from "react"
import styled from "@emotion/styled"

const StyledContent = styled.div`
  & * {
    margin-bottom: ${props => props.theme.spacings.small};
  }
  & h2 {
    color: ${props => props.theme.colors.light.foreground};
  }
  & p {
    text-indent: 2rem;
    & code {
      font-family: ${props => props.theme.fonts.code};
      overflow: hidden;
    }
  }

  & figure {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: ${props => props.theme.spacings.small};
    & figcaption,
    img {
      margin-bottom: 0;
    }
  }

  & pre {
    overflow-x: auto;
    background: #282828;
    color: #ebdbb2;
    padding: 1rem;
  }
  & code {
    white-space: pre;
    font-size: 16px;
    & span.hljs-title {
      color: ${props => props.theme.colors.green};
    }
    & span.hljs-keyword {
      color: ${props => props.theme.colors.brred};
    }
    & span.hljs-string {
      color: ${props => props.theme.colors.green};
    }
    & span.hljs-name {
      color: ${props => props.theme.colors.yellow};
    }
    & span.hljs-params {
      color: ${props => props.theme.colors.green};
    }
  }

  & blockquote {
    font-family: serif;
    max-width: 80%;
    padding: ${props => props.theme.spacings.medium};
    margin: ${props => props.theme.spacings.small} auto;
    background-color: lightgrey;
    text-align: center;
    border-left: 5px solid grey;
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
