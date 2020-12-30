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
    text-indent: ${props => props.theme.spacings.medium};
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
    background: #282828;
    padding: ${props => props.theme.spacings.small};
    overflow: auto;
    & code {
      color: #ebdbb2;
      font-family: ${props => props.theme.fonts.code};
      font-size: 0.9rem;
      // &.language-js {
      & span {
        &.hljs-keyword {
          color: ${props => props.theme.colors.red};
        }
        &.hljs-function {
          color: ${props => props.theme.colors.green};
        }
        &.hljs-params {
          color: ${props => props.theme.colors.yellow};
        }
        &.xml {
          & .hljs-name {
            color: ${props => props.theme.colors.yellow};
          }
          & .hljs-attr {
            color: ${props => props.theme.colors.green};
          }
        }
      }
      // }
    }
  }

  pre::-webkit-scrollbar-thumb {
    background-color: red;
  }

  & blockquote {
    font-family: sans-serif;
    max-width: 80%;
    padding: ${props => props.theme.spacings.medium};
    margin: ${props => props.theme.spacings.small} auto;
    background-color: lightgrey;
    text-align: center;
    border-left: 5px solid grey;
  }

  & li {
    margin-left: ${props => props.theme.spacings.medium};
  }
  & table {
    width: 100%;
    margin: 0;
    text-align: center;
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
