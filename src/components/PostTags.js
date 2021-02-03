import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { TiTags } from "react-icons/ti"

const StyledTags = styled.div`
  width: 100%;
  display: flex;
  margin-top: auto;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`
const StyledTag = styled.div`
  margin-left: ${props => props.theme.spacings.xxSmall};
  background-color: ${props => props.theme.colors[props.themeColor].magenta};
  color: ${props =>
    props.theme === "light"
      ? props.theme.colors[props.themeColor].background
      : props.theme.colors[props.themeColor].white};
  padding: ${props => props.theme.spacings.xxSmall}
    ${props => props.theme.spacings.xxSmall};
  padding: 0.1rem 0.2rem;
  font-size: 0.8rem;
  font-weight: bold;
`
const StyledTagIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.theme.spacings.xSmall};
  & > * {
    height: 20px;
    width: auto;
    color: ${props => props.theme.colors[props.themeColor].foreground};
  }
`

const PostTags = ({ tags = [] }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <>
      {tags.length > 0 && (
        <StyledTags>
          <StyledTagIcon themeColor={themeColor}>
            <TiTags />
          </StyledTagIcon>
          {tags.map(tag => (
            <Link to={`/${tag}`} key={tag}>
              <StyledTag themeColor={themeColor}>
                <p>{tag}</p>
              </StyledTag>
            </Link>
          ))}
        </StyledTags>
      )}
    </>
  )
}

export default PostTags
