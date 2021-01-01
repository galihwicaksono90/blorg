import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"
import { MdDateRange, MdQueryBuilder } from "react-icons/md"

const TitleDescriptions = styled.ul`
  display: flex;
`
const StyledTitleDescription = styled.li`
  color: ${props =>
    props.themeColor === "light"
      ? props.theme.colors[props.themeColor].blue
      : props.theme.colors[props.themeColor].foreground};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 ${props => props.theme.spacings.small}
    ${props => props.theme.spacings.xSmall} 0;
  & p {
    font-size: 0.9rem;
    margin-left: ${props => props.theme.spacings.xxSmall};
  }
`
const TitleDescription = ({ date = "n/a", timeToRead = "n/a" }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <TitleDescriptions>
      <StyledTitleDescription themeColor={themeColor}>
        <MdDateRange />
        <p>{date}</p>
      </StyledTitleDescription>
      <StyledTitleDescription themeColor={themeColor}>
        <MdQueryBuilder />
        <p>
          {timeToRead} {timeToRead === 1 ? "minute read" : "minutes read"}
        </p>
      </StyledTitleDescription>
    </TitleDescriptions>
  )
}

export default TitleDescription
