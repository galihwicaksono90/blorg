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
    max-width: 100%;
  }
  & code {
    font-family: "Cascadia Code";
    font-size: 16px;
    & span {
    }
  }
  // & pre {
  //   padding: ${props => props.theme.spacings.small};
  //   max-width: 100%;
  //   background: #282828;
  //   & code {
  //     display: block;
  //     color: #ebdbb2;
  //     font-family: ${props => props.theme.fonts.code};
  //     font-size: 0.9rem;
  //     overflow: auto;
  //     min-width: 0;
  //   }
  //   &.verse {
  //     overflow-x: auto;
  //     color: red;
  //     background: white;
  //   }
  // }
`

const Content = ({ content = "<h1>No content yet</h1>" }) => {
  return (
    <StyledContent>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </StyledContent>
  )
}

export default Content
