import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"

const StyledContent = styled.div`
  & * {
    margin-bottom: ${props => props.theme.spacings.small};
  }
  & h2 {
    color: ${props => props.theme.colors[props.themeColor].foreground};
    font-family: ${props => props.theme.fonts.title};
    font-weight: normal;
  }
  & p {
    text-indent: ${props => props.theme.spacings.medium};
  }

  & figure {
    & img {
      object-fit: cover;
      object-position: center center;
      max-width: 100%;
      margin: 0;
    }
    & figcaption {
      text-align: center;
    }
  }

  // & code {
  //   font-family: ${props => props.theme.fonts.code};
  //   font-size: 0.9rem;
  //   color: #171717;
  //   background-color: #ebdbb2;
  // }
  & pre {
    background: #171717;
    padding: ${props => props.theme.spacings.small};
    overflow: auto;

    & code {
      font-family: ${props => props.theme.fonts.code};
      font-size: 0.9rem;
      background-color: #171717;
      color: #ebdbb2;

      // uncomment below to create per language syntax highlight
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
        & .hljs-name {
          color: ${props => props.theme.colors.yellow};
        }
        & .hljs-attr {
          color: ${props => props.theme.colors.green};
        }
      }
      // }
    }
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
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <StyledContent themeColor={themeColor}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </StyledContent>
  )
}

export default Content
