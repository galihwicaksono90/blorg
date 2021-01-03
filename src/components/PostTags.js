import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
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
  background-color: ${props => props.theme.colors[props.themeColor].magenta};
  color: ${props =>
    props.theme === "light"
      ? props.theme.colors[props.themeColor].background
      : props.theme.colors[props.themeColor].white};
  padding: ${props => props.theme.spacings.xxSmall}
    ${props => props.theme.spacings.xxSmall};
  font-size: 0.8rem;
`

const PostTags = ({ tags = [] }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <>
      {tags && (
        <StyledTags>
          {tags.map((tag, index) => (
            <StyledTag key={index} themeColor={themeColor}>
              <p># {tag}</p>
            </StyledTag>
          ))}
        </StyledTags>
      )}
    </>
  )
}

export default PostTags
