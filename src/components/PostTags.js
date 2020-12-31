import React from "react"
import styled from "@emotion/styled"

const StyledTags = styled.div`
  width: 100%;
  display: flex;
  margin-top: auto;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`
const StyledTag = styled.div`
  margin-left: ${props => props.theme.spacings.xSmall};
  background-color: ${props => props.theme.colors.magenta};
  color: ${props => props.theme.colors.light.background};
  padding: ${props => props.theme.spacings.xxSmall}
    ${props => props.theme.spacings.xxSmall};
  font-size: 0.8rem;
`

const PostTags = ({ tags = [] }) => {
  return (
    <>
      {tags && (
        <StyledTags>
          {tags.map((tag, index) => (
            <StyledTag key={index}>
              <p># {tag}</p>
            </StyledTag>
          ))}
        </StyledTags>
      )}
    </>
  )
}

export default PostTags
