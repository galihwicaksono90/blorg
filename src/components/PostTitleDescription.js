import React from "react"
import styled from "@emotion/styled"
import { MdDateRange, MdQueryBuilder } from "react-icons/md"

const TitleDescriptions = styled.ul`
  display: flex;
`
const StyledTitleDescription = styled.li`
  color: ${props => props.theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${props => props.theme.spacings.small};
  & h4 {
    margin-left: ${props => props.theme.spacings.xxSmall};
  }
`
const TitleDescription = ({ date = "n/a", timeToRead = "n/a" }) => {
  return (
    <TitleDescriptions>
      <StyledTitleDescription>
        <MdDateRange />
        <h4>{date}</h4>
      </StyledTitleDescription>
      <StyledTitleDescription>
        <MdQueryBuilder />
        <h4>
          {timeToRead} {timeToRead === 1 ? "Minute Read" : "Minutes Read"}
        </h4>
      </StyledTitleDescription>
    </TitleDescriptions>
  )
}

export default TitleDescription
