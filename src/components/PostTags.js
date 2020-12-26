import React from "react"
import styled from "@emotion/styled"

const StyledTags = styled.div`
  width: 100%;
  margin-top: ${props => props.theme.spacings.xxSmall};
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`
const StyledTag = styled.div`
  margin-right: ${props => props.theme.spacings.xSmall};
  margin-bottom: ${props => props.theme.spacings.xSmall};
  background-color: ${props => props.theme.colors.magenta};
  color: ${props => props.theme.colors.light.background};
  padding: ${props => props.theme.spacings.xxSmall}
    ${props => props.theme.spacings.small};
  display: flex;
  align-items: center;
  justify-content: center;
`

const PostTags = ({ tags }) => {
  return (
    <>
      {tags && (
        <StyledTags>
          {tags.map((tag, index) => (
            <StyledTag key={index}>
              <h4># {tag}</h4>
            </StyledTag>
          ))}
        </StyledTags>
      )}
    </>
  )
}

export default PostTags
